import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './components/ui/Card.jsx'
import { Button } from './components/ui/Button.jsx'

export default function App() {
  const [yes, setYes] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100">
      <Card className="w-[320px] rounded-2xl shadow-xl">
        <CardContent className="text-center">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-xl font-bold text-pink-600"
          >
            Will you be my Valentine?
          </motion.h1>

          {!yes && (
            <div className="mt-4 space-y-2">
              <Button className="w-full" onClick={() => setYes(true)}>
                Yes, I would be your Valentine
              </Button>
              <Button variant="outline" className="w-full">
                No
              </Button>
            </div>
          )}

          {yes && <p className="mt-4 text-lg">❤️ Yay! 💕</p>}
        </CardContent>
      </Card>
    </div>
  )
          }
