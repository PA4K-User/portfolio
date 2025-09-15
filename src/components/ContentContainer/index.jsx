import { useState } from "react";
import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
    sectionTitle = "",
    data = []
}) => {

    const [isMouseEnter, setMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;   
       
    return (
        <div id={SECTION_ID} className=" space-y-10 scroll-m-14">
            <div className="text-2xl text-primaryAccent font-bold">Experience</div>
            {
                data.map(({ 
                    date = "", 
                    title = "", 
                    link = "", 
                    materials = [], 
                    descriptions = [], 
                    skills = [], 
                    picture = "",
                }, index) => (
                    <div                    
                        key={`${SECTION_ID}-${index}-${title.replace(" ","")}`}
                        className={`grid grid-cols-1 gap-4 md:grid-cols-[25%_75%] rounded-md px-4 py-4 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? " bg-gray-900" : ""}`}
                        onMouseEnter={() => setMouseEnter({[`${SECTION_ID}-${index}`]: true})}
                        onMouseLeave={() => setMouseEnter({[`${SECTION_ID}-${index}`]: false})}
                    >
                        <div>
                            <FormattedDate isHighlight={isMouseEnter}>{date}</FormattedDate>
                            <Picture picture={picture} title="Fashion Ecommerce" />
                        </div>
                        <div className=" grid gap-y-2">
                            <TitleLink isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
                            <div className=" flex gap-4 text-xl">
                                {
                                    materials.map((e, i) => (
                                        <Material key={`${e}-Material-${i}`} icon={e.type} link={e.link} />
                                    ))
                                }                               
                                
                            </div>
                            {
                                descriptions.map((e, i) => (
                                    <Description key={`${e}-Description-${i}`} description={e} />
                                ))
                            }
                            {
                                skills.map((e, i) => (
                                    <Tech key={`${e}-skill-${i}`} isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                                ))
                            }                            
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ContentContainer;