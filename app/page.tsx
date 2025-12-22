import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left side - Form */}
      <div className="flex-1 overflow-y-auto">
        <section className="remove-scrollbar container h-full">
          <div className="sub-container max-w-[496px] py-5">
            <Image
              src='/assets/icons/logo-full.svg'
              alt="patient"
              width={1000}
              height={1000}
              className="mb-5 h-10 w-fit"
            />
            <PatientForm />
            <div className="text-14-regular mt-10 flex justify-between">
              <p className="text-dark-600">
                © 2025 CarePulse
              </p>
              <Link href='/?admin=true' className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:flex w-1/2 h-full relative overflow-hidden">
        <Image
          src='/assets/images/joeboardingimg.png'
          alt="Onboarding"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  );
}
