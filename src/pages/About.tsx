const About = () => {
  return (
    <div className="min-h-screen bg-cream py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-richblack mb-8">About NS Fashion Hub</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Our Store"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, NS Fashion Hub has been at the forefront of fashion retail, 
              bringing the latest trends and timeless classics to our discerning customers.
            </p>
            <p className="text-gray-600">
              We believe in sustainable fashion and work with partners who share our vision 
              for a more environmentally conscious fashion industry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide high-quality fashion that empowers individuals to express their unique style.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading sustainable fashion retailer, setting trends while protecting our planet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-gray-600">
              Quality, Sustainability, Innovation, and Customer Satisfaction drive everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;