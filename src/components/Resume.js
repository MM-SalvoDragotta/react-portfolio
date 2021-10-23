import React from 'react';
import { SkillBar } from 'react-skills';
import resume from '../assets/Resume - Salvo Dragotta.pdf';

export default function Resume() {
    return (
        <div>
            <section className="about-section text-center">
                <div className="container px-4 px-lg-5">
                    <section className="row gx-4 gx-lg-5 justify-content-center text-white">
                        <div className="col-lg-6">               
                            <div> 
                                <a href={resume} target="_blank">
                                    <h1 style={{padding:"1rem"}}>Download my Resume</h1>                                     
                                </a>
                            </div>
                            <div>                    
                                <h5 style={{padding:"1rem"}}>Front-End Proficiencies</h5>                                                                
                                    <div>
                                        <SkillBar name="HTML5" level={100} color="#FF7F50" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="CSS3" level={85} color="#1E90FF" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="JavaScript" level={90} color="#DAA520" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="jQuery" level={80} color="#0769ad" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="Bootstrap" level={70} color="#080135" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="React" level={60} color="#00CED1" animationDelay={4000} labelWidth={150}/>                              
                                    </div>
                                
                                <h5 style={{padding:"1rem"}}>Back-End Proficiencies</h5>                                 
                                    <div>
                                        <SkillBar name="NodeJS" level={100} color="#9ACD32" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="Express" level={100} color="#215732" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="APIs" level={100} color="#F3E9D2" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="MVC" level={100} color="#772D8B" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="REST" level={100} color="#92D5E6" animationDelay={4000} labelWidth={150}/>                                    
                                    </div>
                                
                                <h5 style={{padding:"1rem"}}>Dev Tool Proficiencies</h5>
                                    <div>
                                        <SkillBar name="Git" level={100} color="#F4EDED" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="npm" level={100} color="red" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="Jest" level={60} color="#45CB85" animationDelay={4000} labelWidth={150}/>
                                        <br></br> 
                                        <SkillBar name="Webpack" level={50} color="#8dd6f9" animationDelay={4000} labelWidth={150}/>                                   
                                    </div>                                
                                <h5 style={{padding:"1rem"}}>Database Proficiencies</h5>
                                <div>
                                    <SkillBar name="MySQL" level={80} color="#00758F" animationDelay={4000} labelWidth={150}/>
                                    <br></br> 
                                    <SkillBar name="Sequelize" level={80} color="#052F5F" animationDelay={4000} labelWidth={150}/>
                                    <br></br>  
                                    <SkillBar name="MongoDB" level={80} color="#4DB33D" animationDelay={4000} labelWidth={150}/> 
                                    <br></br> 
                                    <SkillBar name="Mongoose" level={80} color="#a58b6f" animationDelay={4000} labelWidth={150}/> 
                                    <br></br> 
                                    <SkillBar name="GraphQL" level={60} color="#e535ab" animationDelay={4000} labelWidth={150}/>                                                                 
                                </div>
                                <br></br> 
                            </div>
                        </div>
                    </section>
                </div>                
            </section>        
        </div>
)
}