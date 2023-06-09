import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata ={
    title: "Find Me Prompt",
    description: 'Locate and Share AI Prompts'
}


const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <head>
            <link rel="shortcut icon" href="/static/brain.png" />
        </head>
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout