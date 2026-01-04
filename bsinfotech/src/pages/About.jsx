import { Target, Eye, Users, Zap, Headphones, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-gray-50 py-20 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">BS Infotech</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            BS Infotech is a dynamic IT solutions provider dedicated to helping businesses navigate the digital landscape. 
            From startups to established enterprises, we provide the technical expertise and creative vision needed to 
            transform ideas into powerful digital products. We believe in technology that drives real-world growth.
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission Card */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white shadow-lg">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses by delivering innovative, scalable, and affordable IT solutions. 
                We strive to bridge the gap between complex technology and business goals, ensuring 
                our clients achieve sustainable growth in a competitive digital market.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6 text-white shadow-lg">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become a globally recognized leader in digital transformation, known for our 
                commitment to quality, integrity, and customer success. We envision a future where 
                BS Infotech is synonymous with digital excellence and innovation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose BS Infotech?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We don't just act as vendors; we act as your technology partners. Here is what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <Users className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-400 text-sm">
                A dedicated team of seasoned developers, creative designers, and digital strategists.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <Zap className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">
                Agile methodologies ensure we deliver your projects on time without compromising quality.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <Headphones className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">
                We provide ongoing maintenance and support to ensure your business never stops running.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <Award className="text-purple-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-400 text-sm">
                We adhere to the highest coding standards and best practices for security and performance.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;