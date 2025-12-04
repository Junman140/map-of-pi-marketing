'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, Loader2 } from 'lucide-react'

interface PiPriceData {
  price?: number
  change24h?: number
  changePercent24h?: number
  timestamp?: number
}

export function PiPriceTicker() {
  const [priceData, setPriceData] = useState<PiPriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Use our API route to avoid CORS issues
        const response = await fetch('/api/pi-price', {
          cache: 'no-store',
          headers: {
            'Accept': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error(`Failed to fetch price: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (data.error) {
          console.error('API returned error:', data.error)
          throw new Error(data.error)
        }
        
        console.log('Pi Price API Response (full):', JSON.stringify(data, null, 2)) // Debug log
        
        // Handle the actual API response structure: {"data":[{"idxPx":"0.2311",...}]}
        let price: number | undefined
        let changePercent24h: number | undefined
        
        if (data.data && Array.isArray(data.data) && data.data.length > 0) {
          const priceData = data.data[0]
          
          // Extract price from idxPx (index price)
          if (priceData.idxPx !== undefined) {
            price = parseFloat(priceData.idxPx)
          }
          
          // Calculate 24h change if we have open24h and idxPx
          if (priceData.open24h && priceData.idxPx) {
            const open = parseFloat(priceData.open24h)
            const current = parseFloat(priceData.idxPx)
            if (open > 0) {
              changePercent24h = ((current - open) / open) * 100
            }
          }
        } else {
          // Fallback to other possible structures
          if (data.price !== undefined) {
            price = typeof data.price === 'number' ? data.price : parseFloat(data.price)
          } else if (data.idxPx !== undefined) {
            price = typeof data.idxPx === 'number' ? data.idxPx : parseFloat(data.idxPx)
          }
          
          if (data.changePercent24h !== undefined) {
            changePercent24h = typeof data.changePercent24h === 'number' ? data.changePercent24h : parseFloat(data.changePercent24h)
          }
        }
        
        console.log('Extracted price:', price, 'change:', changePercent24h)
        
        setPriceData({
          price: price,
          change24h: undefined,
          changePercent24h: changePercent24h,
          timestamp: Date.now(),
        })
      } catch (err) {
        console.error('Error fetching Pi price:', err)
        setError('Unable to load price')
      } finally {
        setLoading(false)
      }
    }

    fetchPrice()
    // Refresh every 60 seconds
    const interval = setInterval(fetchPrice, 60000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number | undefined) => {
    if (!price) return 'N/A'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price)
  }

  const formatChange = (change: number | undefined) => {
    if (change === undefined) return 'N/A'
    const sign = change >= 0 ? '+' : ''
    return `${sign}${change.toFixed(2)}%`
  }

  const isPositive = (change: number | undefined) => {
    if (change === undefined) return null
    return change >= 0
  }

  // Show error state if there's an error and no cached data
  if (error && !priceData) {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 flex items-center gap-4 flex-wrap justify-center">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">π</span>
          <span className="text-sm font-semibold text-white">Pi Network</span>
        </div>
        <span className="text-sm text-white/70">Price unavailable</span>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 flex items-center gap-4 flex-wrap justify-center">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-primary">π</span>
        <span className="text-sm font-semibold text-white">Pi Network</span>
      </div>
      
      {loading && !priceData ? (
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-white/70" />
          <span className="text-sm text-white/70">Loading...</span>
        </div>
      ) : priceData ? (
        <>
          {priceData.price !== undefined && priceData.price !== null ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                {formatPrice(priceData.price)}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/70">Price: N/A</span>
            </div>
          )}
          
          {priceData.changePercent24h !== undefined && priceData.changePercent24h !== null && (
            <div className={`flex items-center gap-1 ${
              isPositive(priceData.changePercent24h) 
                ? 'text-green-400' 
                : 'text-red-400'
            }`}>
              {isPositive(priceData.changePercent24h) ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className="text-sm font-semibold">
                {formatChange(priceData.changePercent24h)}
              </span>
              <span className="text-xs text-white/70">24h</span>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm text-white/70">Price unavailable</span>
        </div>
      )}
    </div>
  )
}

