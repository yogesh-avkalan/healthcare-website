import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="align-center mb-12 flex items-center gap-x-3 text-xl font-bold">
            <Image
              src="/assets/icons/avkalan_logo.png"
              height={1000}
              width={1000}
              alt="patient"
              className="h-10 w-fit rounded"
            />
            <span>Avkalan Labs</span>
          </div>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-gray-600 xl:text-left">
              © 2025 Avkalan Labs
            </p>
            <Link href="/?admin=true" className="text-blue-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
