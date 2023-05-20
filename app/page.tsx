

export default function Page() {
  return (
    <div className="w-full">
      <div className="
        flex items-center space-x-4 xl:mx-auto">
        <div className="w-20 xl:w-[300px] ml-1">
          <img
            src="/myself.png"
            className="
              rounded-md
              object-cover
              ring
              ring-gray-300
              inline-block"
            alt="Takuma Nishimura"
          />
        </div>
        <div className="flex-1 text-gray-800">
          <h2 className="font-semibold text-base text-center md:text-3xl mb-3">
            Takuma Nishimura
          </h2>
          <p className="text-xs">
            M.Sc. Artificial Intelligence&nbsp;
          </p>
          <p className="text-xs">
              Friedrich-Alexander-Universität Erlangen-Nürnber, Erlangen, Germany
          </p>
          <p className="text-xs mt-2">
            I'm a software engineer with a strong interest in computer vision and computer graphics. I enjoy applying my software engineering skills to creative projects and exploring new technologies and trends in these fields.
          </p>
        </div>
      </div>
      <div className="mt-4 md:mx-auto md:w-[900px] md:mt-12">
        <h2 className="font-semibold text-base md:text-3xl">
          Education
        </h2>
        <div className="mt-4 text-right text-xs">
          <h3 className="text-sm font-semibold md:text-2xl mb-2">
            Friedrich-Alexander-Universität Erlangen-Nürnberg
          </h3>
          <p>Master's degree</p>
          <p>Artifitial intelligence</p>
          <p>Computer Vision/Gprahics, ML, DL</p>
          <p>2021.10.01 〜 2024.03.31</p>
        </div>
        <div className="mt-4 text-right text-xs">
          <h3 className="text-sm font-semibold md:text-2xl mb-2">
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
