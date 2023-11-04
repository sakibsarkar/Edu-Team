import "./Feature.css";

const Feature = () => {
    return (
        <div className="features">
            <div className="featureHeading">
                <h1>Features</h1>
                <p>Get New And Unique Boots Your
                    Online <span className="text-[#fd5daa]">Assignments</span></p>
            </div>

            <div className="featureContainer">
                <div className="feature">
                    <div>
                        <img className="featureIcon" src="https://i.ibb.co/KwDBTR9/service-icon-3.png" />
                    </div>

                    <div className="featureDetails">
                        <h1 className="text-[#6440fa]">Easy to Read</h1>
                        <p>Our 'Easy to Read' feature is designed to enhance the readability of your assignments. We know that clear and well-structured content is essential for effective communication.</p>
                    </div>
                </div>

                <div className="feature">
                    <div>
                        <img className="featureIcon" src="https://i.ibb.co/GHjycFM/service-icon-1.png" />
                    </div>

                    <div className="featureDetails">
                        <h1 className="text-[#ff9d0f]">Super Writing</h1>
                        <p>This feature provides you with a suite of tools and resources to enhance your writing skills and produce top-notch content.</p>
                    </div>
                </div>



                <div className="feature">
                    <div>
                        <img className="featureIcon" src="https://i.ibb.co/TYGGWyD/service-icon-2.png" />
                    </div>

                    <div className="featureDetails">
                        <h1 className="text-[#ff9d0f]">Organized Doc</h1>
                        <p>Experience the convenience of a well-structured digital workspace with 'Organized Doc,' where every assignment has its place and your academic journey is more efficient than ever</p>
                    </div>
                </div>
            </div>
        </div>
    );
};




// https://i.ibb.co/GHjycFM/service-icon-1.png
// https://i.ibb.co/KwDBTR9/service-icon-3.png
// https://i.ibb.co/TYGGWyD/service-icon-2.png

export default Feature;