

export default function Page() {
  return (
    <div>
      <div className="flex mx-auto w-[800px] mt-12">
        <div className="mr-12 ">
          <img
            src="/icon.png"
            className="
              rounded-full
              object-cover
              w-full
              ring
              ring-gray-300"
            alt="Takuma Nishimura"
          />
        </div>
        <div className="">
          <h2 className="font-semibold text-center text-3xl mb-3">
            Takuma Nishimura
          </h2>
          <p className="text-gray-800">
            M.Sc. Artificial Intelligence&nbsp;
          </p>
          <p>
            <a href="text-blue-900" className="text-blue-600">
              Friedrich-Alexander-Universität Erlangen-Nürnberg, &nbsp;
            </a>
            Erlangen, Germany
          </p>
          <p className="mt-2 text-gray-800">
            I'm a software engineer with a strong interest in computer vision and computer graphics. I enjoy applying my software engineering skills to creative projects and exploring new technologies and trends in these fields.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="font-semibold text-4xl">
          Education
        </h2>
      </div>
    </div>
  );
}
