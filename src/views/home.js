import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Gigantic Yellowish Deer</title>
        <meta property="og:title" content="Gigantic Yellowish Deer" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Get Started Today</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Streamline your hiring process with RecruitBot&apos;s AI-driven
              candidate matching, automated sourcing, and specialized
              U.S.-focused training programs. Equip your team with advanced
              skills in compliance, interviewing, and diversity to make smarter
              hires faster.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Transforming U.S. Recruitment with AI and Expert Training
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">AI-Driven Candidate Matching</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Automated Sourcing</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">U.S.-Focused Training Programs</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Utilize advanced AI algorithms to match candidates with job
              requirements accurately.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Automate the sourcing process to find qualified candidates
              efficiently.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Access specialized training programs focused on U.S. compliance,
              interviewing techniques, and diversity.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Sign up now to experience the power of AI-driven candidate
              matching, automated sourcing, and expert training programs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to revolutionize your recruitment process?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">AI-Driven Candidate Matching</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Automated Sourcing</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">U.S.-Focused Training Programs</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Our platform uses advanced AI algorithms to match candidates with
              job requirements, saving time and ensuring a higher quality of
              hires.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Automate the sourcing process by leveraging our AI technology to
              find and engage with top talent, reducing manual effort and
              increasing efficiency.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Access specialized training programs focused on U.S. recruitment
              practices, compliance, interviewing techniques, and diversity to
              equip your team with the skills needed for successful hiring.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Starter Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145">$29/mo</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146">$49/mo</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147">Sign up now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148">$99/month</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149">$999/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150">Get started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153">Get started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157">$999/year</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162">AI-driven candidate matching</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163">Automated sourcing</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164">U.S.-focused training programs</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174">Compliance training</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175">Interviewing skills training</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176">Diversity training</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186">Sign up for RecruitBot</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187">Set up your hiring preferences</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188">
              Engage in U.S.-focused training programs
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189">
              Optimize recruitment with data insights
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190">
              Create an account on RecruitBot platform to access all the
              powerful features for transforming your recruitment process.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191">
              Customize your candidate requirements, job descriptions, and other
              preferences to ensure RecruitBot finds the best matches for your
              team.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192">
              Participate in expert training sessions tailored for U.S.
              recruitment practices to enhance your team&apos;s skills in
              compliance, interviewing, and diversity.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193">
              Utilize RecruitBot&apos;s data insights and predictive analytics
              to streamline every stage of recruitment, leading to quality hires
              and improved efficiency.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194">
              RecruitBot&apos;s automated sourcing feature saved us hours of
              manual work. The predictive analytics provided valuable insights
              that helped us make data-driven hiring decisions.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195">
              The U.S.-focused training programs offered by RecruitBot enhanced
              our team&apos;s skills in compliance and diversity, making our
              hiring process more efficient and inclusive.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196">
              RecruitBot&apos;s platform optimized every stage of our
              recruitment process. From sourcing to interviewing, the AI
              technology ensured we found the best candidates for our
              organization.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197">
              Thanks to RecruitBot, we were able to streamline our hiring
              strategy and make smarter hires faster. The platform&apos;s data
              insights have been invaluable in improving our recruitment
              outcomes.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198">
              RecruitBot has revolutionized our recruitment process. The
              AI-driven candidate matching and training programs have
              significantly improved the quality of hires we make.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200">Sarah Johnson</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201">Michael Chen</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202">Emily Rodriguez</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203">David Thompson</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204">HR Manager</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205">Talent Acquisition Specialist</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206">Recruitment Coordinator</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207">Head of Talent Acquisition</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">
              123 Main Street, New York, NY 10001
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">contact@recruitbot.com</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212">
              Visit our office for a consultation or to learn more about our
              services.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213">
              Reach out to us via email for any inquiries or support.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216">FAQ</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
