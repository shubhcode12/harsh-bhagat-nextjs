export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto py-12 md:py-24 px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Drop us a feedback
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto">
            If you have any suggestions or any type of feedback feel free to
            fill our the below given form. We will surely consider it.
          </p>

        <div className="pt-4">
        <button
            type="submit"
            className="bg-[#0ce290] text-white px-4 py-2 rounded-lg">
            <a href="https://forms.gle/cpPBSLjkLxbTbf3v9"> Fill the form</a>
          </button>
        </div>
         
        </div>
     
      </div>
    </section>
  );
}
