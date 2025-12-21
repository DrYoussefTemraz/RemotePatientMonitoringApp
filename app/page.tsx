import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left side - Form */}
      <div className="flex-1 overflow-y-auto">
        <section className="remove-scrollbar container h-full">
          <div className="sub-container max-w-[496px] py-10">
            <Image
              src='/assets/icons/logo-full.svg'
              alt="patient"
              width={1000}
              height={1000}
              className="mb-12 h-10 w-fit"
            />
            <PatientForm />
            <div className="text-14-regular mt-20 flex justify-between">
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
      <div className="hidden md:block w-1/2 relative h-full">
        <Image
          src='/assets/images/joeboardingimg.png'
          alt="Onboarding"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
