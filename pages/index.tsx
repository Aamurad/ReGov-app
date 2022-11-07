import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import clientPromise from '../lib/mongodb'
import React, { useState } from 'react'
import Login from '../components/Login'

interface GSSRProps {
    isConnected: boolean
}

const Home: NextPage<{ isConnected: boolean }> = ({ isConnected }) => {
    return <Login></Login>
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        //? client.db() will be the default database passed in the MONGODB_URI
        //? You can change the database by calling the client.db() function and specifying a database like:
        //? const db = client.db("myDatabase");
        //? Then you can execute queries against your database like so:
        //? db.find({}) or any of the MongoDB Node Driver commands
        await clientPromise
        return {
            props: { isConnected: true },
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}
