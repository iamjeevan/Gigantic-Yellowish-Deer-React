import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text29">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text35">
                  RecruitBot has revolutionized our recruitment process. The
                  AI-driven candidate matching and training programs have
                  significantly improved the quality of hires we make.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            HR Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text26">
                        RecruitBot&apos;s automated sourcing feature saved us
                        hours of manual work. The predictive analytics provided
                        valuable insights that helped us make data-driven hiring
                        decisions.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            Michael Chen
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            Talent Acquisition Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        The U.S.-focused training programs offered by RecruitBot
                        enhanced our team&apos;s skills in compliance and
                        diversity, making our hiring process more efficient and
                        inclusive.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Emily Rodriguez
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Recruitment Coordinator
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        RecruitBot&apos;s platform optimized every stage of our
                        recruitment process. From sourcing to interviewing, the
                        AI technology ensured we found the best candidates for
                        our organization.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            David Thompson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Head of Talent Acquisition
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text33">
                        Thanks to RecruitBot, we were able to streamline our
                        hiring strategy and make smarter hires faster. The
                        platform&apos;s data insights have been invaluable in
                        improving our recruitment outcomes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Src:
    'https://images.unsplash.com/photo-1566070294271-0cb77eb47f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDMyMDAyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1526927071144-dbe4c41835e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDMyMDAyN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  author3Alt: 'Image of Emily Rodriguez',
  author2Alt: 'Image of Michael Chen',
  author4Position: undefined,
  review1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1618515752143-5ce13affb1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDMyMDAyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: undefined,
  author4Alt: 'Image of David Thompson',
  author4Name: undefined,
  heading1: undefined,
  author3Name: undefined,
  review3: undefined,
  author1Name: undefined,
  review4: undefined,
  author2Name: undefined,
  content1: undefined,
  author1Alt: 'Image of Sarah Johnson',
  review2: undefined,
  author1Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1636041247125-6354b32c5fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDMyMDAyNnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author4Src: PropTypes.string,
  author3Src: PropTypes.string,
  author3Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Position: PropTypes.element,
  review1: PropTypes.element,
  author2Src: PropTypes.string,
  author2Position: PropTypes.element,
  author4Alt: PropTypes.string,
  author4Name: PropTypes.element,
  heading1: PropTypes.element,
  author3Name: PropTypes.element,
  review3: PropTypes.element,
  author1Name: PropTypes.element,
  review4: PropTypes.element,
  author2Name: PropTypes.element,
  content1: PropTypes.element,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
  author1Position: PropTypes.element,
  author1Src: PropTypes.string,
}

export default Testimonial17
