import { FaGlobeAfrica } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { BiCodeAlt } from "react-icons/bi";

function Features() {
  return (
    <section className="w-full bg-[#f5f9f9] py-16">
      <section className="max-w-screen-xl mx-auto h-full p-5 xl:px-0">
        <section className="grid lg:grid-cols-3 gap-5">
          {/* 1 */}
          <section className="col-span-1 bg-white rounded p-5 h-[200px] lg:h-[300px] flex flex-col justify-center items-center">
            <section className="flex justify-center items-center">
              <BiCodeAlt size={30} />
            </section>
            <section className="text-center ">
              <h3 className="my-2 text-2xl font-bold">Real-world projects</h3>
              <p>
              Build projects that apply your coding skills in real-life scenarios
              </p>
            </section>
          </section>
          {/* 2 */}
          <section className="col-span-1 bg-white rounded p-5 h-[200px] lg:h-[300px] flex flex-col justify-center items-center">
            <section className="flex justify-center items-center">
              <GrCertificate size={30} />
            </section>
            <section className="text-center ">
              <h3 className="my-2 text-2xl font-bold">Certification</h3>
              <p>
                Celebrate your accomplishments with shareable certificates as
                you reach milestones on your journey
              </p>
            </section>
          </section>
          {/* 3 */}
          <section className="col-span-1 bg-white rounded p-5 h-[200px] lg:h-[300px] flex flex-col justify-center items-center">
            <section className="flex justify-center items-center">
              <FaGlobeAfrica size={30} />
            </section>
            <section className="text-center ">
              <h3 className="my-2 text-2xl font-bold">Community</h3>
              <p>
                Connect with the community to get guidance, share insights, and
                collaborate with your fellow learners
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Features;
