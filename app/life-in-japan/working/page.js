export default function WorkingPage() {
  return (
    <>
      <section className="w-full py-10 bg-white">
        <h1 className="text-[42px] md:text-6xl lg:text-6xl font-extrabold mb-6 relative text-center text-rose-400">
          Working in Japan
        </h1>

        <section>
          <div className="flex flex-col max-w-6xl px-3 mx-auto md:px-0 lg:px-8 xl:px-0 md:flex-row py-4">
            <div className="w-full pr-5 mb-6 space-y-1 md:mb-0 md:space-y-4 md:w-4/12 xl:pr-12">
              <h2 className="pb-2 text-center text-3xl font-extrabold cursor-pointer lg:text-4xl text-gray-800">
                Working part-time as a student
              </h2>
            </div>

            <div className="relative w-full mt-6 overflow-hidden md:mt-1 md:w-9/12">
              <div className="w-full space-y-6 pb-8">
                <h3 className="px-5 md:px-0 text-2xl font-bold leading-7 text-gray-600">
                  Applying for the work permit
                </h3>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  In order to be able to work in Japan, it is necessary to apply
                  for a work permit (Permission to engage in activity other than
                  that permitted in status of residence previously granted. The
                  application form can be downloaded from these links
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://www.moj.go.jp/isa/content/930004124.pdf"
                  >
                    {" "}
                    [PDF]{" "}
                  </a>{" "}
                  or
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://www.moj.go.jp/isa/content/930004125.xlsx"
                  >
                    {" "}
                    [Excel]{" "}
                  </a>
                  .
                </p>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  There are two ways to proceed with the application:
                </p>

                <ol className="list-inside list-decimal px-5 md:px-0 text-left md:text-justify text-gray-700">
                  <li>
                    Before receiving your residence card: fill out the
                    application form before coming to Japan and give it to the
                    immigration officer at the airport.{" "}
                  </li>
                  <li>
                    After receiving your residence card: if you already have a
                    residence card but did not receive your work permit, you
                    have to apply for it by filling out the form and submitting
                    it to the immigration bureau.{" "}
                  </li>
                </ol>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  It is recommended that you apply for a work permit at the
                  airport because if you wait until you receive your residence
                  card and are already in the country, it can take up to a month
                  for the work permit to be issued. Once your work permit is
                  approved, the immigration officer will put a sticker on your
                  passport and stamp the bottom space on the back of your
                  residence card with the work permit stamp. Please be aware
                  that your work permit will become invalid once you leave your
                  school, since you will no longer be doing activities related
                  to being a student. Additionally, in order to have this work
                  permit when renewing your residence card, it is necessary to
                  submit the application form to the immigration bureau along
                  with other renewal documents. For more information, please
                  visit the Immigration Services Agency of Japan’s dedicated
                  webpage{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://www.isa.go.jp/en/applications/guide/nyuukokukanri07_00059.html"
                  >
                    here
                  </a>
                  .
                </p>
              </div>

              <div className="w-full space-y-6 pb-8">
                <h3 className="px-5 md:px-0 text-2xl font-bold leading-7 text-gray-600">
                  Working limitations and restricted jobs{" "}
                </h3>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  The maximum working hour as a student is 28 hours a week.
                  Moreover, as a student, you are not allowed to partake in jobs
                  related to adult entertainment and sex trade. These types of
                  jobs would include the following:
                </p>
                <ul className="list-inside list-disc px-5 md:px-0 text-left md:text-justify text-gray-700">
                  <li>Bars(restaurants that serve alcohol are fine)</li>
                  <li>Hostess bars or host clubs </li>
                  <li>Video game arcades</li>
                  <li>Pachinko parlors</li>
                  <li>Love hotels</li>
                  <li>Adult goods or video stores</li>
                  <li>Massage parlors</li>
                </ul>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  Please be aware that just working in the same venue is
                  considered illegal even if you do not engage in any kind of
                  inappropriate acts, just working in the same venue is
                  considered illegal therefore you cannot work at these
                  establishments even as a janitor or kitchen staff.
                </p>
              </div>

              <div className="w-full space-y-6 pb-8">
                <h3 className="px-5 md:px-0 text-2xl font-bold leading-7 text-gray-600">
                  Possible English-speaking jobs
                </h3>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  Besides the prohibited employment mentioned above, students
                  can work in any postings from being clerks at convenience
                  stores to private tutoring. However, these jobs usually
                  require that you can communicate in Japanese. For those who
                  cannot speak Japanese, some possible jobs could include being
                  the teaching assistants or research assistants at your
                  university. It is also recommended that you take a look at job
                  postings as an English communicator at reputable organizations
                  such as{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://www.isa.co.jp/recruit/"
                  >
                    ISA
                  </a>
                  ,{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://lbejapan.co.jp/recruit/"
                  >
                    LBE
                  </a>
                  , or{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://www.tnews.jp/entries/35477"
                  >
                    Tomonokai
                  </a>
                  . For other no-Japanese part-time jobs, please have a look at
                  the{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://jobs.gaijinpot.com/job/index/lang/en"
                  >
                    GaijinPot
                  </a>{" "}
                  and{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://www.workjapan.jp/jobseeker/"
                  >
                    Work Japan website
                  </a>
                  .
                </p>
              </div>

              <div className="w-full space-y-6 pb-8">
                <h3 className="px-5 md:px-0 text-2xl font-bold leading-7 text-gray-600">
                  Be aware of scams!
                </h3>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  There has been an increase in scam activities where people
                  will give you money in exchange for borrowing your personal
                  documents. They could use your personal documents to conduct
                  illegal activities so, under no circumstances should you give
                  anything with your name on it to another person. These
                  personal documents includes:
                </p>
                <ul className="list-inside list-disc text-left md:text-justify text-gray-700">
                  <li>Residence card</li>
                  <li>Bank book </li>
                  <li>ATM card</li>
                  <li>Passport</li>
                  <li>Driving license</li>
                </ul>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  Organized crime groups also target foreign students to carry
                  out simple tasks in exchange for money such as:
                </p>
                <ul className="list-inside list-disc text-left md:text-justify text-gray-700">
                  <li>Withdrawing money using someone else’s ATM card</li>
                  <li>
                    Ordering products online using someone else’s information
                    and payment information
                  </li>
                  <li>
                    Receiving packages for someone else and giving it to them
                    later
                  </li>
                </ul>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  Please be careful and don’t fall for such things. There are
                  plenty of ways to make honest money in Japan, so only work
                  with reputable companies. If you are unsure about job offers,
                  please don’t hesitate to reach out to us. We are more than
                  happy to consult you! You can reach us through our Facebook
                  Page, Telegram Channel, and email.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-6xl px-3 mx-auto md:px-0 lg:px-8 xl:px-0 md:flex-row py-4">
            <div className="w-full pr-5 mb-6 space-y-1 md:mb-0 md:space-y-4 md:w-4/12 xl:pr-12">
              <h2 className="pb-2 text-center text-3xl font-extrabold cursor-pointer lg:text-4xl text-gray-800">
                Full-time jobs after graduation
              </h2>
            </div>

            <div className="relative w-full mt-6 overflow-hidden md:mt-1 md:w-9/12">
              <div className="w-full space-y-6 pb-8">
                <h3 className="px-5 md:px-0 text-2xl font-bold leading-7 text-gray-600">
                  Recruitments
                </h3>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  When it comes to working in Japan, the most important thing to
                  keep in mind is recruitment. Job hunting should start as soon
                  as recruitments are available. After all, the early bird
                  catches the worm and Japanese students are early… in fact,
                  Japanese students start job hunting so early it is the norm to
                  secure a posting one year before graduation, not after
                  graduating. That is to say, if you are doing your bachelor's
                  degree then you should start your job hunting at the end of
                  your third year. If you are in your master's, begin looking
                  for a job posting at the end of your first year. So keep an
                  eye out for recruitments and apply as soon as you can! But
                  where can you seek out recruitments? Well, here are some
                  useful links from our alumni:
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://job.rikunabi.com/2024/"
                  >
                    リクナビ
                  </a>
                  ,{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://www.mynavi.jp/"
                  >
                    マイナビ
                  </a>
                  ,{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://globalcareer.com/"
                  >
                    globalcareer.com
                  </a>{" "}
                  and{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://job.connectiu.com/"
                  >
                    job.connectiu
                  </a>
                  . Companies are always looking for more human resources
                  through educational institutes so it’s also important to keep
                  up with university news about recruitments as well. In fact,
                  some university departments even offer recommendations! They
                  also provide guidance on the career and job hunting process so
                  it’s useful to connect with them.
                </p>
              </div>

              <div className="w-full space-y-6 pb-8">
                <h3 className="px-5 md:px-0 text-2xl font-bold leading-7 text-gray-600">
                  Knowing Japanese is a huge advantage
                </h3>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  This is a no-brainer; we are living in Japan, of course
                  knowing Japanese is beneficial. So, for those who want to work
                  in Japan, it’s good to take Japanese language courses
                  concurrent with your major! Better yet, learn (a bit of)
                  Japanese before you move here. It's always helpful to know the
                  language considering the fact that Japanese society as a whole
                  is not very English-friendly. But don’t be discouraged, there
                  are English-speaking companies out there! Big tech companies,
                  international firms, and some startup businesses use English
                  as their primary mode of communication. However, you’ll need
                  to actively look for information yourself as it’s not possible
                  to apply to those companies through recruitments.
                </p>
              </div>

              <div className="w-full space-y-6 pb-8">
                <h3 className="px-5 md:px-0 text-2xl font-bold leading-7 text-gray-600">
                  Japanese work permit
                </h3>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  Graduates who are entering the workforce must remember to
                  apply for a work permit or employment visa as the residence
                  card with ‘Student’ status becomes ineffective immediately
                  after graduation. Japan has a lot of different types of work
                  and long-term visas to apply for based on the employment and
                  reason for living in Japan. The type of work visa you need
                  depends on the type of job that you have. While requirements
                  may vary from visa to visa, some general requirements when
                  applying for a work permit in Japan are:
                </p>
                <ul className="list-inside list-disc text-left md:text-justify text-gray-700">
                  <li>an offer of employment from a Japanese company</li>
                  <li>passport </li>
                  <li>visa application form</li>
                  <li>photograph</li>
                  <li>Certificate of Eligibility (COE)</li>
                  <li>
                    CV and original university degrees or certificates
                    (depending on the type of visa){" "}
                  </li>
                </ul>
              </div>

              <div className="w-full space-y-6 pb-8">
                <h3 className="px-5 md:px-0 text-2xl font-bold leading-7 text-gray-600">
                  Certificate of Eligibility
                </h3>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  The Certificate of Eligibility is an essential document when
                  applying for any Japanese visa. This certificate is issued by
                  the Immigration Services Agency of Japan. You can submit this
                  form either in person or you can mail it. To obtain this
                  certificate, there are some documents you must submit:
                </p>
                <ul className="list-inside list-disc text-left md:text-justify text-gray-700">
                  <li>completed application form</li>
                  <li>passport-sized photograph</li>
                  <li>filled out and stamped the return envelope.</li>
                </ul>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  Again, depending on your employment, there are additional
                  requirements to fulfill. For example, those applying for a
                  researcher visa need to provide the following:
                </p>
                <ul className="list-inside list-disc text-left md:text-justify text-gray-700">
                  <li>
                    material showing the outline of the recipient organization
                  </li>
                  <li>
                    diploma, CV, and other documents certifying your career
                    position
                  </li>
                  <li>
                    documentation certifying the activity, its duration,
                    position, and remuneration.
                  </li>
                </ul>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  Meanwhile, those in the engineering field will need to show:
                </p>
                <ul className="list-inside list-disc text-left md:text-justify text-gray-700">
                  <li>
                    copies of the company registration and a statement of profit
                    and loss of the recipient organization
                  </li>
                  <li>
                    materials showing the business substance of the recipient
                    organization
                  </li>
                  <li>
                    diploma or a certificate of graduation with a major in the
                    subject regarding the activity for the visa being applied
                    for
                  </li>
                  <li>documents certifying your professional career</li>
                  <li>
                    documents certifying the activity, its duration, position,
                    and the remuneration.
                  </li>
                </ul>
                <p className="px-5 md:px-0 text-base font-normal leading-[20px] md:leading-none text-gray-700 md:text-lg text-left md:text-justify">
                  For a complete list of documents required for each Japan work
                  permit visa application form, please visit the{" "}
                  <a
                    className="underline dark:text-blue-500 hover:no-underline"
                    href="https://www.isa.go.jp/en/index.html"
                  >
                    Japanese government’s website
                  </a>
                  . Once you receive your COE, it’s time to apply for a new
                  residence card and a new chapter of your life awaits you!
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

