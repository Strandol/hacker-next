import Link from 'next/link'
import Head from 'next/head'

import { LayoutStyles, GlobalStyles } from './Layout.styles'

const Layout = ({ children, title, description }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Head>

        <div className='container'>
            <nav>
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
