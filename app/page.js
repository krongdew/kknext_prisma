import Link from 'next/link'
import Navbars from '@/components/Navbars'
import Concept from '@/components/Concept'
import { blue } from '@mui/material/colors'
import React from 'react'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <Navbars />
    <Concept />
    <Link href="/somepage" style={{color:blue}}>somepage</Link>
    </main>
  )
}
