import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Locate and Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Here you can find the best prompt to use and share your own prompts to the world.
        </p>

        <Feed />
    </section>
  )
}

export default Home