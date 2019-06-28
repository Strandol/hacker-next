import fetch from 'isomorphic-fetch'
import Error from 'next/error'

class Index extends React.Component {
    static async getInitialProps() {
        let stories = []

        try {
            const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1')

            stories = await res.json()
        } catch (err) {
            console.log(err)
        }

        return { stories }
    }

    render() {
        const { stories } = this.props

        if (!stories.length) return <Error statusCode={503} />

        return (
            <div>
                <h1>Hacker next</h1>
                <div>
                    {stories.map(s => <h2 key={s.id}>{s.title}</h2>)}
                </div>
            </div>
        )
    }
}

export default Index
