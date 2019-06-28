export const LayoutStyles = () =>
    <style jsx>{`
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #f6f6ef;
        }

        nav {
            background: #f60;
            padding: 1rem;
        }

        nav > * {
            display: inline-block;
            color: black;
        }

        nav a {
            text-decoration: none;
        }

        nav .main-title {
            font-weight: bold;
    }
    `}</style>

export const GlobalStyles = () =>
    <style global jsx>{`
        body {
            background: white;
            font-size: 14px;
            font-family: Verdana, Geneva, sans-serif;
        }
    `}</style>
