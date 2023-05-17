import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="purple_gradient head_text text-center">
            Locate and Share
            <br className="max-md:hidden" />
            <span className="yellow_gradient text-center"> Useful AI Prompts</span>
        </h1>
        <p className="desc text-center">
            Here you can find the best prompt to use and share your own prompts to the world.
        </p>

        <Feed />
    </section>
  )
}

export default Home