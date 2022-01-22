import React, { useRef } from "react";
import Myimg from '../assets/images/item7.png'

import ResumePdf from '../assets/Data/Resume_FOR_DEV.pdf'
import gif from '../assets/images/wave-hello.gif'

const Hero = () => {


    return (
        <div className='c'>
            {/* <Pattern /> */}
            <div className="hero-container">
                <div className="hero-text">
                    <span>
                        <span><h3>HI I'm Vinay Yellaram <img src={gif} alt="" width='35px' height='35px'
                        /></h3>

                        </span>
                    </span>

                    <h1 className='hero-title'>
                        <svg id="dev-logo" viewBox="0 0 639 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-outside-1_126_5" maskUnits="userSpaceOnUse" x="-0.0999756" y="0.399902" width="640" height="231" fill="black">
                                <rect fill="white" x="-0.0999756" y="0.399902" width="640" height="231" />
                                <path d="M103 5.4999L82.4 74.9999H69.5L54.9 22.3999L39.4 74.9999L26.6 75.0999L6.90002 5.4999H19L33.4 62.0999L49 5.4999H61.8L76.3 61.7999L90.8 5.4999H103Z" />
                                <path d="M134.802 14.6999V35.0999H158.802V44.3999H134.802V65.6999H161.802V74.9999H123.402V5.3999H161.802V14.6999H134.802Z" />
                                <path d="M224.044 39.2999C227.777 39.9666 230.944 41.9332 233.544 45.1999C236.144 48.4666 237.444 52.1666 237.444 56.2999C237.444 59.8332 236.51 63.0332 234.644 65.8999C232.844 68.6999 230.21 70.9332 226.744 72.5999C223.277 74.1999 219.244 74.9999 214.644 74.9999H186.844V5.4999H213.344C218.077 5.4999 222.144 6.2999 225.544 7.89991C228.944 9.49991 231.51 11.6666 233.244 14.3999C234.977 17.0666 235.844 20.0666 235.844 23.3999C235.844 27.3999 234.777 30.7332 232.644 33.3999C230.51 36.0666 227.644 38.0332 224.044 39.2999ZM198.244 34.6999H212.344C216.077 34.6999 218.977 33.8666 221.044 32.1999C223.177 30.4666 224.244 27.9999 224.244 24.7999C224.244 21.6666 223.177 19.2332 221.044 17.4999C218.977 15.6999 216.077 14.7999 212.344 14.7999H198.244V34.6999ZM213.644 65.6999C217.51 65.6999 220.544 64.7666 222.744 62.8999C224.944 61.0332 226.044 58.4332 226.044 55.0999C226.044 51.6999 224.877 48.9999 222.544 46.9999C220.21 44.9999 217.11 43.9999 213.244 43.9999H198.244V65.6999H213.644Z" />
                                <path d="M35.2 155.5C42.6 155.5 49.0667 156.933 54.6 159.8C60.2 162.6 64.5 166.667 67.5 172C70.5667 177.267 72.1 183.433 72.1 190.5C72.1 197.567 70.5667 203.7 67.5 208.9C64.5 214.1 60.2 218.1 54.6 220.9C49.0667 223.633 42.6 225 35.2 225H12.5V155.5H35.2ZM35.2 215.7C43.3334 215.7 49.5667 213.5 53.9 209.1C58.2334 204.7 60.4 198.5 60.4 190.5C60.4 182.433 58.2334 176.133 53.9 171.6C49.5667 167.067 43.3334 164.8 35.2 164.8H23.9V215.7H35.2Z" />
                                <path d="M105.798 164.7V185.1H129.798V194.4H105.798V215.7H132.798V225H94.3985V155.4H132.798V164.7H105.798Z" />
                                <path d="M217.74 155.5L191.64 225H178.44L152.24 155.5H164.44L185.04 213.3L205.74 155.5H217.74Z" />
                                <path d="M249.673 164.7V185.1H273.673V194.4H249.673V215.7H276.673V225H238.273V155.4H276.673V164.7H249.673Z" />
                                <path d="M313.115 215.8H336.615V225H301.715V155.5H313.115V215.8Z" />
                                <path d="M388.848 225.7C382.382 225.7 376.415 224.2 370.948 221.2C365.548 218.133 361.248 213.9 358.048 208.5C354.915 203.033 353.348 196.9 353.348 190.1C353.348 183.3 354.915 177.2 358.048 171.8C361.248 166.4 365.548 162.2 370.948 159.2C376.415 156.133 382.382 154.6 388.848 154.6C395.382 154.6 401.348 156.133 406.748 159.2C412.215 162.2 416.515 166.4 419.648 171.8C422.782 177.2 424.348 183.3 424.348 190.1C424.348 196.9 422.782 203.033 419.648 208.5C416.515 213.9 412.215 218.133 406.748 221.2C401.348 224.2 395.382 225.7 388.848 225.7ZM388.848 215.8C393.448 215.8 397.548 214.767 401.148 212.7C404.748 210.567 407.548 207.567 409.548 203.7C411.615 199.767 412.648 195.233 412.648 190.1C412.648 184.967 411.615 180.467 409.548 176.6C407.548 172.733 404.748 169.767 401.148 167.7C397.548 165.633 393.448 164.6 388.848 164.6C384.248 164.6 380.148 165.633 376.548 167.7C372.948 169.767 370.115 172.733 368.048 176.6C366.048 180.467 365.048 184.967 365.048 190.1C365.048 195.233 366.048 199.767 368.048 203.7C370.115 207.567 372.948 210.567 376.548 212.7C380.148 214.767 384.248 215.8 388.848 215.8Z" />
                                <path d="M495.166 176.2C495.166 179.733 494.333 183.067 492.666 186.2C491 189.333 488.333 191.9 484.666 193.9C481 195.833 476.3 196.8 470.566 196.8H457.966V225H446.566V155.5H470.566C475.9 155.5 480.4 156.433 484.066 158.3C487.8 160.1 490.566 162.567 492.366 165.7C494.233 168.833 495.166 172.333 495.166 176.2ZM470.566 187.5C474.9 187.5 478.133 186.533 480.266 184.6C482.4 182.6 483.466 179.8 483.466 176.2C483.466 168.6 479.166 164.8 470.566 164.8H457.966V187.5H470.566Z" />
                                <path d="M528.439 164.7V185.1H552.439V194.4H528.439V215.7H555.439V225H517.039V155.4H555.439V164.7H528.439Z" />
                                <path d="M616.58 225L600.58 197.2H591.88V225H580.48V155.5H604.48C609.814 155.5 614.314 156.433 617.98 158.3C621.714 160.167 624.48 162.667 626.28 165.8C628.147 168.933 629.08 172.433 629.08 176.3C629.08 180.833 627.747 184.967 625.08 188.7C622.48 192.367 618.447 194.867 612.98 196.2L630.18 225H616.58ZM591.88 188.1H604.48C608.747 188.1 611.947 187.033 614.08 184.9C616.28 182.767 617.38 179.9 617.38 176.3C617.38 172.7 616.314 169.9 614.18 167.9C612.047 165.833 608.814 164.8 604.48 164.8H591.88V188.1Z" />
                            </mask>
                            <path d="M103 5.4999L82.4 74.9999H69.5L54.9 22.3999L39.4 74.9999L26.6 75.0999L6.90002 5.4999H19L33.4 62.0999L49 5.4999H61.8L76.3 61.7999L90.8 5.4999H103Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M134.802 14.6999V35.0999H158.802V44.3999H134.802V65.6999H161.802V74.9999H123.402V5.3999H161.802V14.6999H134.802Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M224.044 39.2999C227.777 39.9666 230.944 41.9332 233.544 45.1999C236.144 48.4666 237.444 52.1666 237.444 56.2999C237.444 59.8332 236.51 63.0332 234.644 65.8999C232.844 68.6999 230.21 70.9332 226.744 72.5999C223.277 74.1999 219.244 74.9999 214.644 74.9999H186.844V5.4999H213.344C218.077 5.4999 222.144 6.2999 225.544 7.89991C228.944 9.49991 231.51 11.6666 233.244 14.3999C234.977 17.0666 235.844 20.0666 235.844 23.3999C235.844 27.3999 234.777 30.7332 232.644 33.3999C230.51 36.0666 227.644 38.0332 224.044 39.2999ZM198.244 34.6999H212.344C216.077 34.6999 218.977 33.8666 221.044 32.1999C223.177 30.4666 224.244 27.9999 224.244 24.7999C224.244 21.6666 223.177 19.2332 221.044 17.4999C218.977 15.6999 216.077 14.7999 212.344 14.7999H198.244V34.6999ZM213.644 65.6999C217.51 65.6999 220.544 64.7666 222.744 62.8999C224.944 61.0332 226.044 58.4332 226.044 55.0999C226.044 51.6999 224.877 48.9999 222.544 46.9999C220.21 44.9999 217.11 43.9999 213.244 43.9999H198.244V65.6999H213.644Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M35.2 155.5C42.6 155.5 49.0667 156.933 54.6 159.8C60.2 162.6 64.5 166.667 67.5 172C70.5667 177.267 72.1 183.433 72.1 190.5C72.1 197.567 70.5667 203.7 67.5 208.9C64.5 214.1 60.2 218.1 54.6 220.9C49.0667 223.633 42.6 225 35.2 225H12.5V155.5H35.2ZM35.2 215.7C43.3334 215.7 49.5667 213.5 53.9 209.1C58.2334 204.7 60.4 198.5 60.4 190.5C60.4 182.433 58.2334 176.133 53.9 171.6C49.5667 167.067 43.3334 164.8 35.2 164.8H23.9V215.7H35.2Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M105.798 164.7V185.1H129.798V194.4H105.798V215.7H132.798V225H94.3985V155.4H132.798V164.7H105.798Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M217.74 155.5L191.64 225H178.44L152.24 155.5H164.44L185.04 213.3L205.74 155.5H217.74Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M249.673 164.7V185.1H273.673V194.4H249.673V215.7H276.673V225H238.273V155.4H276.673V164.7H249.673Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M313.115 215.8H336.615V225H301.715V155.5H313.115V215.8Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M388.848 225.7C382.382 225.7 376.415 224.2 370.948 221.2C365.548 218.133 361.248 213.9 358.048 208.5C354.915 203.033 353.348 196.9 353.348 190.1C353.348 183.3 354.915 177.2 358.048 171.8C361.248 166.4 365.548 162.2 370.948 159.2C376.415 156.133 382.382 154.6 388.848 154.6C395.382 154.6 401.348 156.133 406.748 159.2C412.215 162.2 416.515 166.4 419.648 171.8C422.782 177.2 424.348 183.3 424.348 190.1C424.348 196.9 422.782 203.033 419.648 208.5C416.515 213.9 412.215 218.133 406.748 221.2C401.348 224.2 395.382 225.7 388.848 225.7ZM388.848 215.8C393.448 215.8 397.548 214.767 401.148 212.7C404.748 210.567 407.548 207.567 409.548 203.7C411.615 199.767 412.648 195.233 412.648 190.1C412.648 184.967 411.615 180.467 409.548 176.6C407.548 172.733 404.748 169.767 401.148 167.7C397.548 165.633 393.448 164.6 388.848 164.6C384.248 164.6 380.148 165.633 376.548 167.7C372.948 169.767 370.115 172.733 368.048 176.6C366.048 180.467 365.048 184.967 365.048 190.1C365.048 195.233 366.048 199.767 368.048 203.7C370.115 207.567 372.948 210.567 376.548 212.7C380.148 214.767 384.248 215.8 388.848 215.8Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M495.166 176.2C495.166 179.733 494.333 183.067 492.666 186.2C491 189.333 488.333 191.9 484.666 193.9C481 195.833 476.3 196.8 470.566 196.8H457.966V225H446.566V155.5H470.566C475.9 155.5 480.4 156.433 484.066 158.3C487.8 160.1 490.566 162.567 492.366 165.7C494.233 168.833 495.166 172.333 495.166 176.2ZM470.566 187.5C474.9 187.5 478.133 186.533 480.266 184.6C482.4 182.6 483.466 179.8 483.466 176.2C483.466 168.6 479.166 164.8 470.566 164.8H457.966V187.5H470.566Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M528.439 164.7V185.1H552.439V194.4H528.439V215.7H555.439V225H517.039V155.4H555.439V164.7H528.439Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                            <path d="M616.58 225L600.58 197.2H591.88V225H580.48V155.5H604.48C609.814 155.5 614.314 156.433 617.98 158.3C621.714 160.167 624.48 162.667 626.28 165.8C628.147 168.933 629.08 172.433 629.08 176.3C629.08 180.833 627.747 184.967 625.08 188.7C622.48 192.367 618.447 194.867 612.98 196.2L630.18 225H616.58ZM591.88 188.1H604.48C608.747 188.1 611.947 187.033 614.08 184.9C616.28 182.767 617.38 179.9 617.38 176.3C617.38 172.7 616.314 169.9 614.18 167.9C612.047 165.833 608.814 164.8 604.48 164.8H591.88V188.1Z" stroke="#FF8B00" strokeWidth="10" mask="url(#path-1-outside-1_126_5)" />
                        </svg>
                    </h1>
                    <p>
                        I am an Undergraduate Electronics and Telecommunication Engineer. Learn , Experiment and Create is what I love to do any engineering thing. I do Front-End and Back-End Web Development. Love to build
                        Electronics circuits
                    </p>
                    <div className='about-btns'>

                        <div>
                            {/* <div className='blur-btn'>Resume
                            </div> */}
                            <a className='resume-btn' href={ResumePdf} target='_blank'>Resume</a>
                        </div>
                        <div>
                            <a className='lets-talk-btn' href='#contact'>
                                Let's talk
                            </a>
                            {/* <div className='blur-btn'>Let's talk</div> */}
                        </div>


                    </div>

                </div>

                <div className='img-container'>
                    <img src={Myimg} alt="My Img" />
                </div>
            </div>
            <div className='blur'></div>
        </div>

    );
};
export default Hero;
