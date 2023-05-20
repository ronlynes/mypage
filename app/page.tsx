

export default function Page() {
  return (
    <div>
      <div className="flex mx-auto w-[800px] mt-12">
        <div className="mr-12 mt-4">
          <img
            src="/icon.png"
            className="
              rounded-full
              object-cover
              w-full
              ring
              ring-gray-300
              block"
            alt="Takuma Nishimura"
          />
        </div>
        <div className="">
          <h2 className="font-semibold text-3xl mb-3 ">
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
      <div className="mx-auto w-[900px] mt-12">
        <h2 className="font-semibold text-3xl">
          Education
        </h2>
        <div className="text-right">
          <h3 className="text-2xl mb-2">
            Friedrich-Alexander-Universität Erlangen-Nürnberg
          </h3>
          <p>Master's degree</p>
          <p>Artifitial intelligence</p>
          <p>Computer Vision, Computer Gprahics, Machine Learning, DeepLearning</p>
          <p>2021.10.01 〜 2024.03.31</p>
        </div>
        <div className="text-right mt-8">
          <h3 className="text-2xl mb-2">
            The University of Electro-Communications
          </h3>
          <p>Bachelor's Degree</p>
          <p>Security Informatics Program, School of Informatics and Engineering</p>
          <p>The University of Electro-Communications</p>
          <p>Mathematics, Computer, Cyber Security</p>
          <p>2016.04.01 〜 2021.03.31</p>
        </div>
      </div>
    </div>
  );
}
