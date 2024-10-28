import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <header className="text-center bg-gradient-to-r from-purple-300 to-blue-300 p-10 rounded-lg mb-8">
                <h1 className="text-5xl font-extrabold text-gray-800">About Us</h1>
                <p className="text-xl text-gray-600 mt-2">Your one-stop destination for delicious recipes</p>
            </header>

            {/* Mission Statement */}
            <section className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700">
                    At Recipe Hub, we believe that cooking should be accessible and enjoyable for everyone.
                    Our mission is to provide a platform where food enthusiasts can explore, share,
                    and bookmark their favorite recipes from around the world.
                </p>
            </section>

            {/* Features Section */}
            <section className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Features</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                    <li>🍽️ Explore a wide variety of recipes</li>
                    <li>⭐ Bookmark your favorite dishes for easy access</li>
                    <li>🔍 User-friendly search functionality</li>
                    <li>🤝 Interactive community for recipe sharing</li>
                </ul>
            </section>

            {/* Meet the Team Section */}
            <section className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet the Team</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="https://media.istockphoto.com/id/2135217351/photo/japanese-woman-checks-social-networks-on-her-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=rWGn_4LGMXgb5PGVWoJ9Z9mH-dUpbRMowjyuEOeTsOg=" alt="Team Member 1" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Alice Johnson</h3>
                        <p className="text-gray-600">Co-Founder & Chef</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Mark Smith</h3>
                        <p className="text-gray-600">Food Blogger & Recipe Developer</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Sophia Lee</h3>
                        <p className="text-gray-600">Community Manager</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
                <div className="space-y-4">
                    <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <p className="text-lg italic text-gray-700">"Recipe Hub has transformed my cooking experience. I love bookmarking my favorite dishes!"</p>
                        <cite className="block text-right font-semibold">- Jessica Taylor</cite>
                    </blockquote>
                    <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <p className="text-lg italic text-gray-700">"The variety of recipes available is amazing! I always find something new to try."</p>
                        <cite className="block text-right font-semibold">- David Brown</cite>
                    </blockquote>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Started!</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Start exploring our extensive collection of recipes and bookmark your favorites today!
                </p>
                <Link to="/">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
                        Explore Recipes
                    </button>
                </Link>
            </section>

            {/* Footer Section */}
            <footer className="text-center text-gray-600">
                <p>Contact us: <a href="mailto:info@recipehub.com" className="text-blue-600">info@recipehub.com</a></p>
                <p>
                    Follow us on social media:
                    <a href="#" className="text-blue-600 ml-2">Facebook</a>,
                    <a href="#" className="text-blue-600 ml-2">Instagram</a>
                </p>
                <p className="text-sm text-gray-500 mt-4">© 2024 Recipe Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;
