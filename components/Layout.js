import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'

import { LayoutStyles, GlobalStyles } from './Layout.styles'

const Layout = ({ children, title, description, backButton }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Head>

        <div className='container'>
            <nav>
                {backButton && <span onClick={() => Router.back()} className='back-button'>&#x2b05;</span>}
                <Link href='/'>
                    <a><span className='main-title'>{title}</span></a>
                </Link>
            </nav>

            {children}
        </div>

        <LayoutStyles />
        <GlobalStyles />
    </div>
)

export default Layout;
