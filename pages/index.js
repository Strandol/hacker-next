import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import Link from 'next/link'

import StoryList from '../components/StoryList'
import Layout from '../components/Layout'

class Index extends React.Component {
    static async getInitialProps({ req, res, query }) {
        let stories = []
        let page;

        try {
            page = +query.page || 1

            const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)

            stories = await res.json()
        } catch (err) {
            console.log(err)
        }

        return { page, stories }
    }

    render() {
        const { page, stories } = this.props

        if (!stories.length) return <Error statusCode={503} />

        return (
            <Layout title='Hacker Next' description='Hacker news stories list'>
                <StoryList stories={stories} />

                <footer>
                    <Link href={`/?page=${page + 1}`}>
                        <a>Next Page - {page + 1}</a>
                    </Link>
                </footer>

                <style jsx>{`
                    footer {
                        padding: 1rem;
                    }

                    footer a {
                        font-weight: bold;
                        color: black;
                        text-decoration: none;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default Index
