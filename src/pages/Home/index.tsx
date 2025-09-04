import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import AnimatedIcon from '../../components/ui/AnimatedIcon';

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-global-1 overflow-x-hidden">
      <Header />
      
      <main className="w-full">
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                background: `
                  radial-gradient(ellipse at 50% 20%, rgba(255, 100, 0, 0.08) 0%, rgba(255, 120, 0, 0.05) 25%, rgba(0, 0, 0, 0.4) 60%, #000000 100%),
                  linear-gradient(135deg, #000000 0%, rgba(15, 10, 5, 1) 25%, rgba(25, 15, 5, 0.2) 50%, rgba(0, 0, 0, 1) 100%)
                `
              }}
            ></div>
            
            <img 
              src="/images/img_blurred_gradient.png" 
              alt="" 
              className="w-full h-full object-cover mt-[240px] sm:mt-[320px] md:mt-[400px] lg:mt-[480px] transform scale-110 opacity-30"
              style={{ 
                filter: 'blur(3px) brightness(0.6) contrast(0.9) sepia(0.2) hue-rotate(10deg)',
                mixBlendMode: 'soft-light'
              }}
            />
            
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                background: `
                  radial-gradient(circle at 30% 40%, rgba(255, 100, 0, 0.04) 0%, transparent 40%),
                  radial-gradient(circle at 70% 60%, rgba(255, 120, 0, 0.03) 0%, transparent 35%)
                `
              }}
            ></div>
          </div>
          
          <div className="relative z-10 w-full">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col justify-start items-center gap-[62px] sm:gap-[80px] md:gap-[100px] lg:gap-[124px] py-8 sm:py-12 md:py-16 lg:py-8">
                
                <div className="w-full max-w-[840px] mx-auto px-4 sm:px-6 lg:px-14">
                  <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-start items-center animate-fadeInUp">
                    
                    <div className="relative w-full flex flex-col justify-center items-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 transform transition-all duration-1000 hover:scale-105">
                        <h1 
                          className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[117px] font-inter font-medium leading-[48px] sm:leading-[72px] md:leading-[96px] lg:leading-[120px] xl:leading-[143px] text-center text-global-4 animate-slide-in-left"
                          style={{ 
                            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                            background: 'linear-gradient(135deg, #ffffff 0%, #ffffff99 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          The
                        </h1>
                        
                        <h1 
                          className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[117px] font-inter font-medium leading-[48px] sm:leading-[72px] md:leading-[96px] lg:leading-[120px] xl:leading-[143px] text-center text-global-4 animate-slide-in-left delay-200"
                          style={{ 
                            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                            background: 'linear-gradient(135deg, #ffffff 0%, #ffffff99 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          full
                        </h1>
                        
                        <AnimatedIcon />
                        
                        <h1 
                          className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[117px] font-inter font-medium leading-[48px] sm:leading-[72px] md:leading-[96px] lg:leading-[120px] xl:leading-[143px] text-center text-global-4 animate-slide-in-right"
                          style={{ 
                            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                            background: 'linear-gradient(135deg, #ffffff 0%, #ffffff99 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          stack
                        </h1>
                      </div>
                      
                      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 transform transition-all duration-1000 hover:scale-105">
                        <h1 
                          className="text-[42px] sm:text-[62px] md:text-[82px] lg:text-[102px] xl:text-[121px] font-inter font-medium leading-[50px] sm:leading-[74px] md:leading-[98px] lg:leading-[122px] xl:leading-[147px] text-center text-global-4 mt-2 sm:mt-4 animate-slide-in-up delay-500"
                          style={{ 
                            textShadow: '0 0 30px rgba(255, 195, 0, 0.5)',
                            background: 'linear-gradient(135deg, #ffffff 0%, #ffc300 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          AI
                        </h1>
                        
                        <h1 
                          className="text-[42px] sm:text-[62px] md:text-[82px] lg:text-[102px] xl:text-[121px] font-inter font-medium leading-[50px] sm:leading-[74px] md:leading-[98px] lg:leading-[122px] xl:leading-[147px] text-center text-global-4 mt-2 sm:mt-4 animate-slide-in-up delay-700"
                          style={{ 
                            textShadow: '0 0 30px rgba(255, 195, 0, 0.5)',
                            background: 'linear-gradient(135deg, #ffffff 0%, #ffc300 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          workspace
                        </h1>
                      </div>
                    </div>
                    
                    <p 
                      className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-inter font-normal leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[29px] text-center text-global-5 max-w-[600px] mx-auto animate-fadeIn delay-700"
                      style={{
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      Firebase Studio accelerates your entire development
                      <br className="hidden sm:block" />
                      lifecycle with AI agents. Build backends, front ends,
                      <br className="hidden sm:block" />
                      and mobile apps, all in one place.
                    </p>
                    
                    <div className="animate-fadeIn delay-1000">
                      <Button 
                        variant="gradient" 
                        size="medium"
                        className="mt-4 sm:mt-6 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 animate-pulse-slow"
                        style={{
                          background: 'linear-gradient(45deg, #ff9100 0%, #ffc300 50%, #ff9100 100%)',
                          backgroundSize: '200% 100%',
                          animation: 'gradientShift 3s ease infinite'
                        }}
                      >
                        Try Firebase Studio
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="relative w-full max-w-[1270px] mx-auto animate-slideInUp delay-1200">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">
                    <div className="w-full lg:w-[22%] flex justify-center lg:justify-end mb-4 lg:mb-[38px] lg:self-end">
                      <img 
                        src="/images/img_gemini_panel.png" 
                        alt="Gemini AI Panel" 
                        className="w-[250px] h-[330px] sm:w-[280px] sm:h-[370px] md:w-[300px] md:h-[400px] lg:w-[332px] lg:h-[438px] object-contain transform transition-all duration-700 hover:scale-105 hover:-rotate-2 animate-enhanced-glow animate-float-rotate"
                      />
                    </div>
                    
                    <div className="w-full lg:w-[74%] lg:-ml-[258px]">
                      <img 
                        src="/images/img_code_panel.png" 
                        alt="Code Editor Interface" 
                        className="w-full h-auto max-w-[900px] lg:max-w-[1136px] mx-auto object-contain transform transition-all duration-700 hover:scale-[1.02] animate-pulse-glow"
                        style={{
                          borderRadius: '12px'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="absolute top-[120px] sm:top-[140px] md:top-[160px] lg:top-[174px] right-0 w-[28%] hidden lg:block">
                    <img 
                      src="/images/img_preview_panel.png" 
                      alt="App Preview Panel" 
                      className="w-full h-auto max-w-[372px] object-contain transform transition-all duration-700 hover:scale-105 hover:rotate-1 animate-enhanced-glow animate-float-rotate"
                      style={{
                        animationDelay: '2s'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="relative w-full -mt-[200px] sm:-mt-[300px] md:-mt-[350px] lg:-mt-[418px] overflow-hidden">
          <div className="absolute inset-0 w-full bg-black">
          </div>
          
          <div className="relative z-10 w-full pt-[300px] sm:pt-[400px] md:pt-[450px] lg:pt-[515px]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
              <div className="flex flex-col gap-[36px] sm:gap-[50px] md:gap-[60px] lg:gap-[72px] justify-start items-center">
                
                <div className="relative w-full max-w-[1238px] mx-auto">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">
                    <div className="w-full lg:w-[14%] flex justify-center lg:justify-start mb-4 lg:mb-[148px] lg:self-end">
                      <img 
                        src="/images/img_svg_blue_a200.svg" 
                        alt="Development Icon" 
                        className="w-[120px] h-[64px] sm:w-[150px] sm:h-[80px] md:w-[180px] md:h-[95px] lg:w-[216px] lg:h-[114px] object-contain animate-enhanced-glow animate-float-rotate transform transition-all duration-700 hover:scale-110"
                        style={{
                          animationDelay: '1s'
                        }}
                      />
                    </div>
                    
                    <div className="w-full lg:w-[80%] lg:-ml-[160px]">
                      <img 
                        src="/images/img_firebase_studio.png" 
                        alt="Firebase Studio Interface" 
                        className="w-full h-auto max-w-[900px] lg:max-w-[1124px] mx-auto object-contain animate-pulse-glow transform transition-all duration-700 hover:scale-[1.01]"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute top-[80px] sm:top-[120px] md:top-[140px] lg:top-[166px] right-0 w-[18%] hidden lg:block">
                    <img 
                      src="/images/img_svg_pink_100.svg" 
                      alt="AI Icon" 
                      className="w-full h-auto max-w-[218px] object-contain animate-enhanced-glow animate-float-rotate transform transition-all duration-700 hover:scale-105"
                      style={{
                        animationDelay: '3s'
                      }}
                    />
                  </div>
                </div>
                
                <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-12">
                  <div className="flex flex-col justify-start items-center gap-4 sm:gap-6">
                    <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[61px] font-inter font-medium leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[64px] text-center text-global-4">
                      Get to work quickly
                      <br />
                      wherever you are
                    </h2>
                    
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] font-inter font-normal leading-[18px] sm:leading-[20px] md:leading-[24px] text-center text-global-2 mt-4 sm:mt-6">
                      Go from opening your browser to building in minutes, not hours. Import your existing
                      <br className="hidden sm:block" />
                      repositories from GitHub, GitLab, Bitbucket, or your local machine, with support for most
                      <br className="hidden sm:block" />
                      tech stacks. Or use the App Prototyping agent to quickly create a new application using
                      <br className="hidden sm:block" />
                      natural language, mockups, drawing tools, and screenshots, or select from a large catalog of
                      <br className="hidden sm:block" />
                      popular framework or language templates. You can also customize your environment with
                      <br className="hidden sm:block" />
                      Nix.
                    </p>
                    
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] font-inter font-normal leading-[16px] sm:leading-[18px] md:leading-[19px] text-center text-global-2 mt-4 sm:mt-6">
                      Firebase Studio is currently available with 3 workspaces at no cost during preview. Members
                    </p>
                    
                    <div className="flex flex-wrap justify-center items-center gap-1 text-[13px] sm:text-[14px] md:text-[15px] font-inter">
                      <span className="font-normal leading-[18px] sm:leading-[20px] text-global-2">of the </span>
                      <span className="font-medium leading-[18px] sm:leading-[20px] text-global-4">Google Developer Program</span>
                      <span className="font-normal leading-[16px] sm:leading-[19px] text-global-2"> get up to 30 workspaces.</span>
                    </div>
                    
                    <Button 
                      variant="gradient" 
                      size="small"
                      className="mt-6 sm:mt-8"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full mt-[100px] sm:mt-[150px] md:mt-[180px] lg:mt-[198px]">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative animate-glowing-border rounded-[24px] p-1">
              <div className="bg-global-2 rounded-[22px] p-8 sm:p-12 md:p-16 lg:p-18">
                <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-0">
                  
                  <div className="w-full lg:w-[48%] px-4 sm:px-6 lg:px-14">
                    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 justify-start items-center">
                      
                      <Button 
                        variant="secondary" 
                        size="small"
                        className="bg-button-1 text-button-3 text-[12px] font-jetbrains-mono font-normal leading-[16px] uppercase tracking-wider"
                      >
                        AI POWERED
                      </Button>
                      
                      <div className="flex flex-col justify-start items-center gap-2">
                        <div className="flex flex-col sm:flex-row justify-center items-start gap-2 sm:gap-4">
                          <h2 className="text-[28px] sm:text-[32px] md:text-[35px] lg:text-[37px] font-inter font-medium leading-[34px] sm:leading-[38px] md:leading-[42px] lg:leading-[46px] text-center text-global-4 self-end mt-1">
                            Build with 
                          </h2>
                          <img 
                            src="/images/img_svg_black_900.png" 
                            alt="Gemini Logo" 
                            className="w-[80px] h-[28px] sm:w-[100px] sm:h-[34px] md:w-[110px] md:h-[38px] lg:w-[122px] lg:h-[42px] object-contain"
                          />
                        </div>
                        <h2 className="text-[26px] sm:text-[30px] md:text-[33px] lg:text-[35px] font-inter font-medium leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] text-center text-global-4">
                          in Firebase
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <p className="text-[12px] sm:text-[13px] font-inter font-normal leading-[16px] sm:leading-[20px] text-center text-global-2">
                          Work quickly and efficiently with Gemini in Firebase. Complete a
                          <br className="hidden sm:block" />
                          variety of tasks like coding, debugging, testing, refactoring, explaining,
                          <br className="hidden sm:block" />
                          and documenting code with AI assistance that interacts with your
                          <br className="hidden sm:block" />
                          codebase and takes actions on your behalf. Use the built-in model or
                          <br className="hidden sm:block" />
                          select your preferred model.
                        </p>
                        
                        <p className="text-[12px] sm:text-[13px] font-inter font-normal leading-[15px] sm:leading-[17px] text-center text-global-2 mt-3 sm:mt-5">
                          New Gemini Code Assist agents help with everything from migration to
                        </p>
                        
                        <div className="flex flex-wrap justify-center items-center gap-1 text-[12px] sm:text-[13px] font-inter">
                          <span className="font-normal leading-[15px] sm:leading-[17px] text-global-2">AI testing. </span>
                          <span className="font-medium leading-[15px] sm:leading-[17px] text-global-4 cursor-pointer hover:underline">Sign up</span>
                          <span className="font-normal leading-[15px] sm:leading-[17px] text-global-2"> for the waitlist to get early access to Code Assist</span>
                        </div>
                        
                        <p className="text-[12px] sm:text-[13px] font-inter font-normal leading-[15px] sm:leading-[17px] text-center text-global-2">
                          agents via the Google Developer Program.
                        </p>
                      </div>
                      
                      <div className="border border-transparent rounded-[12px] p-3">
                        <span className="text-[12px] sm:text-[13px] font-inter font-bold leading-[15px] sm:leading-[17px] text-center text-global-3 cursor-pointer hover:underline">
                          Get Started
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-[48%] mt-8 lg:mt-0">
                    <img 
                      src="/images/img_illustration.png" 
                      alt="AI Development Illustration" 
                      className="w-full h-auto max-w-[500px] lg:max-w-[672px] mx-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full mt-[100px] sm:mt-[150px] md:mt-[180px] lg:mt-[206px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
              
              <Button 
                variant="secondary" 
                size="small"
                className="bg-button-1 text-button-3 text-[12px] font-jetbrains-mono font-normal leading-[16px] uppercase tracking-wider"
              >
                COLLABORATION
              </Button>
              
              <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[59px] font-inter font-medium leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[64px] text-center text-global-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                Share ideas and
                <br />
                work together
              </h2>
              
              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-inter font-normal leading-[18px] sm:leading-[20px] md:leading-[23px] text-center text-global-2 mt-4 sm:mt-6 md:mt-8 max-w-[600px]">
                Provide a URL for your early testers to preview your app and
                <br className="hidden sm:block" />
                give feedback. Share workspaces with other team members
                <br className="hidden sm:block" />
                to contribute to the same project at the same time. Enable
                <br className="hidden sm:block" />
                everyone to work together, whether they can code or not.
              </p>
              
              <Button 
                variant="gradient" 
                size="small"
                className="mt-4 sm:mt-6 md:mt-8 lg:mt-10"
              >
                Get Started
              </Button>
              
              <div className="relative w-full max-w-[996px] mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                <img 
                  src="/images/img_firebase_studio_632x996.png" 
                  alt="Collaboration Interface" 
                  className="w-full h-auto object-contain"
                />
                
                {/* Floating Icons */}
                <div className="absolute bottom-[100px] sm:bottom-[140px] md:bottom-[160px] lg:bottom-[188px] left-[100px] sm:left-[140px] md:left-[160px] lg:left-[198px] flex flex-col gap-4 sm:gap-6">
                  <img 
                    src="/images/img_svg_blue_a200_01.svg" 
                    alt="Collaboration Icon 1" 
                    className="w-[60px] h-[25px] sm:w-[70px] sm:h-[30px] md:w-[80px] md:h-[34px] lg:w-[90px] lg:h-[38px] object-contain"
                  />
                  <img 
                    src="/images/img_svg_pink_100_38x86.svg" 
                    alt="Collaboration Icon 2" 
                    className="w-[60px] h-[26px] sm:w-[70px] sm:h-[30px] md:w-[76px] md:h-[34px] lg:w-[86px] lg:h-[38px] object-contain self-end"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* End-to-end Testing Section */}
        <section className="w-full mt-[150px] sm:mt-[180px] md:mt-[200px] lg:mt-[232px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <div className="bg-global-2 border border-[#303030] rounded-[22px] p-8 sm:p-12 md:p-14 lg:p-14">
              <div className="flex flex-col lg:flex-row justify-center items-end gap-8 lg:gap-0">
                
                {/* Left Image */}
                <div className="w-full lg:w-[42%] flex justify-center lg:justify-start mt-6 sm:mt-8 md:mt-10 lg:mt-12 mx-4 lg:mx-5">
                  <img 
                    src="/images/img_clip_path_group.png" 
                    alt="Testing Interface" 
                    className="w-full h-auto max-w-[500px] lg:max-w-[648px] object-contain self-center animate-snake-line rounded-[22px]"
                  />
                </div>
                
                {/* Right Content */}
                <div className="w-full lg:flex-1 px-4 sm:px-8 md:px-12 lg:px-14 pr-8 sm:pr-12 md:pr-16 lg:pr-[150px] mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                  <div className="flex flex-col justify-start items-end gap-4 sm:gap-6 md:gap-8">
                    
                    {/* Badge */}
                    <Button 
                      variant="secondary" 
                      size="small"
                      className="bg-button-1 text-button-3 text-[12px] font-jetbrains-mono font-normal leading-[16px] uppercase tracking-wider mr-0 lg:mr-[138px]"
                    >
                      END-TO-END TESTING
                    </Button>
                    
                    {/* Heading */}
                    <h2 className="text-[28px] sm:text-[32px] md:text-[34px] lg:text-[36px] font-inter font-medium leading-[34px] sm:leading-[36px] md:leading-[38px] lg:leading-[41px] text-center lg:text-right text-global-4 mt-6 sm:mt-8 md:mt-10 lg:mt-11 mr-0 lg:mr-[26px]">
                      Optimize your full-stack
                      <br />
                      apps across platforms
                    </h2>
                    
                    {/* Description */}
                    <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-7">
                      <div className="w-full lg:w-[64%] flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-wrap justify-center items-center gap-1 text-[12px] sm:text-[13px] font-inter">
                          <span className="font-normal leading-[15px] sm:leading-[17px] text-global-2">With access to thousands of extensions in the </span>
                          <span className="font-medium leading-[15px] sm:leading-[17px] text-global-4">Open VSX Registry</span>
                          <span className="font-normal leading-[15px] sm:leading-[17px] text-global-2">, you</span>
                        </div>
                        
                        <p className="text-[12px] sm:text-[13px] font-inter font-normal leading-[16px] sm:leading-[20px] text-center text-global-2">
                          can test and optimize your API endpoints and backends as you build
                          <br className="hidden sm:block" />
                          them. And with built-in web previews and Android emulators, you can
                          <br className="hidden sm:block" />
                          preview your apps as your users would see them.
                        </p>
                      </div>
                      
                      {/* CTA */}
                      <div className="border border-transparent rounded-[12px] p-3 mt-4 sm:mt-6 md:mt-8 mr-0 lg:mr-[146px] flex justify-end items-center">
                        <span className="text-[12px] sm:text-[13px] font-inter font-bold leading-[15px] sm:leading-[17px] text-center text-global-3 cursor-pointer hover:underline">
                          Get Started
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Deployment Section */}
        <section className="w-full mt-[150px] sm:mt-[180px] md:mt-[200px] lg:mt-[232px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
              
              {/* Content */}
              <div className="w-full lg:w-[50%] flex flex-col justify-start items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                
                {/* Badge */}
                <Button 
                  variant="secondary" 
                  size="small"
                  className="bg-button-1 text-button-3 text-[12px] font-jetbrains-mono font-normal leading-[16px] uppercase tracking-wider"
                >
                  DEPLOYMENT & MONITORING
                </Button>
                
                {/* Heading */}
                <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-inter font-medium leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[64px] text-center text-global-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                  Develop faster,
                  <br />
                  deliver with
                  <br />
                  confidence
                </h2>
                
                {/* Description */}
                <p className="text-[13px] sm:text-[14px] md:text-[15px] font-inter font-normal leading-[18px] sm:leading-[20px] md:leading-[23px] text-center text-global-2 mt-4 sm:mt-6 md:mt-8 max-w-[600px]">
                  Publish your apps to Firebase App Hosting with a few clicks,
                  <br className="hidden sm:block" />
                  and monitor the usage and behavior at a glance. You can also
                  <br className="hidden sm:block" />
                  deploy your production apps to Firebase Hosting, Cloud Run,
                  <br className="hidden sm:block" />
                  or your own custom infrastructure with complete control of
                  <br className="hidden sm:block" />
                  your deployment approach.
                </p>
                
                {/* Deployment Visualization - Enhanced visibility and spacing */}
                <div className="w-full flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-24">
                  <div className="relative max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] w-full">
                    <img 
                      src="/images/img_astro_island_svg.svg" 
                      alt="Deployment Visualization" 
                      className="w-full h-auto object-contain transform transition-all duration-700 hover:scale-105"
                      style={{
                        filter: 'drop-shadow(0 8px 32px rgba(255, 195, 0, 0.3))',
                        minHeight: '300px',
                        padding: '20px 0'
                      }}
                    />
                    {/* Enhancement glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent rounded-lg -z-10"></div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Button 
                  variant="gradient" 
                  size="small"
                  className="mt-8 sm:mt-12 md:mt-16 lg:mt-20"
                >
                  Try Firebase Studio
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Innovate with Firebase Section */}
        <section 
          className="w-full mt-[100px] sm:mt-[150px] md:mt-[200px] lg:mt-[250px] relative overflow-hidden z-40"
        >
          {/* Firebase Studio Style Background */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse at 50% 30%, rgba(255, 100, 0, 0.08) 0%, rgba(255, 120, 0, 0.05) 30%, rgba(0, 0, 0, 0.7) 70%, #000000 100%),
                linear-gradient(135deg, #000000 0%, rgba(25, 18, 5, 0.6) 25%, rgba(35, 25, 8, 0.3) 50%, rgba(20, 12, 5, 0.7) 75%, #000000 100%)
              `
            }}
          ></div>
          
          {/* Background image with subtle orange tinting */}
          <div 
            className="absolute inset-0 w-full h-full opacity-20"
            style={{
              backgroundImage: "url('/images/img_image.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(4px) brightness(0.4) contrast(0.8) sepia(0.3) hue-rotate(15deg)',
              mixBlendMode: 'overlay'
            }}
          ></div>
          
          {/* Subtle orange accent gradients */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
                radial-gradient(circle at 25% 25%, rgba(255, 100, 0, 0.06) 0%, transparent 35%),
                radial-gradient(circle at 75% 75%, rgba(255, 120, 0, 0.04) 0%, transparent 40%)
              `
            }}
          ></div>
          <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-[150px] sm:gap-[180px] md:gap-[200px] lg:gap-[232px] justify-start items-center">
                
                {/* Main Content */}
                <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-14 mt-[250px] sm:mt-[350px] md:mt-[400px] lg:mt-[496px]">
                  <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[34px] justify-start items-center">
                    
                    <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-inter font-medium leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[69px] text-center text-global-4">
                      Innovate with Firebase
                    </h2>
                    
                    <p className="text-[13px] sm:text-[14px] md:text-[15px] font-inter font-normal leading-[18px] sm:leading-[20px] md:leading-[23px] text-center text-global-4 max-w-[800px]">
                      For years, millions of you have relied on Firebase to accelerate your app
                      <br className="hidden sm:block" />
                      development and run your apps with confidence. We hope you join us as we
                      <br className="hidden sm:block" />
                      continue to evolve Firebase to help you take advantage of generative AI and a new
                      <br className="hidden sm:block" />
                      way to build APIs, backends, web and mobile apps, custom agents, and more!
                    </p>
                    
                    <Button 
                      variant="primary" 
                      size="small"
                      className="bg-global-4 text-button-1 mt-4 sm:mt-6"
                    >
                      Try Firebase Studio
                    </Button>
                  </div>
                </div>
                
                <div className="w-full max-w-[1600px] mx-auto relative z-50">
                  <div className="bg-global-1 rounded-[24px] p-6 sm:p-8 md:p-10 lg:p-12 relative z-50">
                    
                    {/* Header with Logo and Status */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
                      <div className="flex justify-center sm:justify-start">
                        <img 
                          src="/images/img_link_svg.png" 
                          alt="Firebase Studio Logo" 
                          className="w-[250px] h-[50px] lg:w-[322px] lg:h-[64px] object-contain"
                        />
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] font-jetbrains-mono font-normal uppercase tracking-wider text-global-2">
                          CURRENT STATUS
                        </span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                      
                      {/* Learn Column */}
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[13px] font-inter font-semibold text-global-4 mb-2">Learn</h3>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Developer guides</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">SDK & API reference</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Samples</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Libraries</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">GitHub</a>
                      </div>
                      
                      {/* Stay Connected Column */}
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[13px] font-inter font-semibold text-global-4 mb-2">Stay connected</h3>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Check out the blog</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Find us on Reddit</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Follow on X</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Subscribe on YouTube</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Attend an event</a>
                      </div>
                      
                      {/* Support Column */}
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[13px] font-inter font-semibold text-global-4 mb-2">Support</h3>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Contact support</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Stack Overflow</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Slack community</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Release notes</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Brand guidelines</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">FAQs</a>
                      </div>
                      
                      {/* Tools for Developers Column */}
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[13px] font-inter font-semibold text-global-4 mb-2">Tools for developers</h3>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Android</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Chrome</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Firebase</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">Google Cloud Platform</a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">All products</a>
                      </div>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
                      <div className="flex justify-center sm:justify-start">
                        <img 
                          src="/images/img_link_google_for.svg" 
                          alt="Google for Developers" 
                          className="w-[180px] h-[21px] lg:w-[192px] lg:h-[22px] object-contain"
                        />
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">
                          Terms
                        </a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">
                          Privacy
                        </a>
                        <a href="#" className="text-[12px] font-inter text-global-2 hover:text-global-3 hover:underline transition-all duration-200 cursor-pointer">
                          Manage Cookies
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
