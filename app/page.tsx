import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container ">
        <div className="sub-container max-w-[496px] justify-center">
          <div className="align-center mb-6 flex items-center justify-center gap-x-[10px] text-xl font-bold">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="h-10 w-fit rounded"
            />
            <span>HealthCare</span>
          </div>

          <PatientForm />

          <div className="text-14-regular w-full flex justify-between absolute bottom-0 left-0 p-8">
            <p className="justify-items-end text-gray-600 xl:text-left">
              © 2025 Avkalan Labs
            </p>
            <Link href="/?admin=true" className="text-blue-500 ">
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
