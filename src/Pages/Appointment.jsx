import React, { useState } from 'react';

const Appointment = () => {
    const [selectedSection, setSelectedSection] = useState('therapist');

    return (
        <div className='mt-24 px-20'>
            {/* Section Selection Buttons */}
            <div className='flex space-x-4 mb-4 bg-slate-300 items-center justify-center p-3'>
                <button
                    className={`${selectedSection === 'therapist' ? 'text-3xl font-bold' : 'text-xl'} p-3 text-white rounded-lg `}
                    onClick={() => setSelectedSection('therapist')}>
                    Therapist
                </button>
                <button
                    className={`${selectedSection === 'exercise' ? 'text-3xl font-bold' : 'text-xl'} p-3 text-white `}
                    onClick={() => setSelectedSection('exercise')}>
                    Exercise
                </button>
                <button
                    className={`${selectedSection === 'education' ? 'text-3xl font-bold' : 'text-xl'} p-3 text-white `}
                    onClick={() => setSelectedSection('education')}>
                    Education
                </button>
            </div>

            {/* Conditionally Render Sections */}
            {selectedSection === 'therapist' ? (
                <div>
                    <h2 className='text-2xl font-bold'>Therapist Section</h2>
                    <p>This is where you can book an appointment with a therapist.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {/* Example Card 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                            <div className="flex">
                                <img
                                    className="w-24 h-24 rounded-full"
                                    src="https://via.placeholder.com/150"
                                    alt="Therapist"
                                />
                                <div className="ml-4">
                                    <h2 className="text-xl font-bold">Swati Kharb</h2>
                                    <p className="text-gray-600">MA in Clinical Psychology (RCI Licensed)</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <span className="text-orange-500 text-lg mr-2">★</span>
                                    <h3 className="text-lg font-semibold">Specialization</h3>
                                </div>
                                <p className="text-gray-700">
                                    Depression, Anxiety, Relationship Issues, OCD, Anger{' '}
                                    <span className="text-orange-600 cursor-pointer">Show More</span>
                                </p>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <span className="text-orange-500 text-lg mr-2">✔</span>
                                    <h3 className="text-lg font-semibold">Next Available at</h3>
                                </div>
                                <p className="text-gray-700">Oct 2, 2024 12:00 PM</p>
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg">
                                    View Profile
                                </button>
                                <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">
                                    Book Session
                                </button>
                            </div>
                        </div>

                        {/* Example Card 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                            {/* Add similar content for other therapists */}
                        </div>

                        {/* Example Card 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                            {/* Add similar content for other therapists */}
                        </div>
                    </div>
                </div>
            ) : selectedSection === 'exercise' ? (
                <div>
                    <h2 className='text-2xl font-bold'>Exercise Section</h2>
                    <p>This section contains recommended exercises for your health.</p>
                    <div className=" bg-gray-100 flex items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                            {/* Card 1 */}
                            <div className="relative bg-white rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                                <img
                                    className="w-full h-48 object-cover"
                                    src="https://via.placeholder.com/600x400"
                                    alt="Exercise"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-800">Full Body Workout</h3>
                                    <p className="text-gray-600 mt-2">Get a full-body workout that strengthens your core, legs, and upper body.</p>
                                    <div className="mt-4">
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                            30 mins
                                        </span>
                                    </div>
                                    <div className="mt-6 flex justify-between items-center">
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                                            Start Exercise
                                        </button>
                                        <span className="text-blue-500 font-semibold">View Details</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative bg-white rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                                <img
                                    className="w-full h-48 object-cover"
                                    src="https://via.placeholder.com/600x400"
                                    alt="Exercise"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-800">HIIT Routine</h3>
                                    <p className="text-gray-600 mt-2">High-Intensity Interval Training to maximize fat burning and endurance.</p>
                                    <div className="mt-4">
                                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                            20 mins
                                        </span>
                                    </div>
                                    <div className="mt-6 flex justify-between items-center">
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                                            Start Exercise
                                        </button>
                                        <span className="text-blue-500 font-semibold">View Details</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="relative bg-white rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                                <img
                                    className="w-full h-48 object-cover"
                                    src="https://via.placeholder.com/600x400"
                                    alt="Exercise"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-800">Yoga Flow</h3>
                                    <p className="text-gray-600 mt-2">A relaxing yoga flow to help you unwind and stretch out those tight muscles.</p>
                                    <div className="mt-4">
                                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                                            45 mins
                                        </span>
                                    </div>
                                    <div className="mt-6 flex justify-between items-center">
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                                            Start Exercise
                                        </button>
                                        <span className="text-blue-500 font-semibold">View Details</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className='text-2xl font-bold'>Education Section</h2>
                    <p>This section provides educational resources for mental and physical health.</p>
                    <div className="min-h-screen bg-gray-100 py-10 px-6">
                        {/* Header */}
                        <div className="mb-12 text-center">
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">Relaxation Videos</h1>
                            <p className="text-lg text-gray-600">Curated videos to help you relax and unwind</p>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-8 flex justify-center space-x-4">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">All</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300">Meditation</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300">Breathing Exercises</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300">Stress Relief</button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-300">Sleep Aid</button>
                        </div>

                        {/* Video Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Video 1 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                                <iframe
                                    className="w-full h-48"
                                    src="https://www.youtube.com/embed/VIDEO_ID"
                                    title="Relaxation Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">10-Minute Meditation</h3>
                                    <p className="text-gray-600 mt-2">A quick meditation session to calm your mind and relax your body.</p>
                                </div>
                            </div>

                            {/* Video 2 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                                <iframe
                                    className="w-full h-48"
                                    src="https://www.youtube.com/embed/VIDEO_ID"
                                    title="Relaxation Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Deep Breathing Exercises</h3>
                                    <p className="text-gray-600 mt-2">Follow these simple breathing exercises to reduce stress and anxiety.</p>
                                </div>
                            </div>

                            {/* Video 3 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                                <iframe
                                    className="w-full h-48"
                                    src="https://www.youtube.com/embed/VIDEO_ID"
                                    title="Relaxation Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Guided Meditation for Sleep</h3>
                                    <p className="text-gray-600 mt-2">A calming meditation to help you wind down and prepare for sleep.</p>
                                </div>
                            </div>

                            {/* Video 4 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                                <iframe
                                    className="w-full h-48"
                                    src="https://www.youtube.com/embed/VIDEO_ID"
                                    title="Relaxation Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Yoga for Relaxation</h3>
                                    <p className="text-gray-600 mt-2">A yoga routine designed to help relax your body and mind.</p>
                                </div>
                            </div>

                            {/* Video 5 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                                <iframe
                                    className="w-full h-48"
                                    src="https://www.youtube.com/embed/VIDEO_ID"
                                    title="Relaxation Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Mindfulness Practice</h3>
                                    <p className="text-gray-600 mt-2">A short mindfulness session to ground you in the present moment.</p>
                                </div>
                            </div>

                            {/* Video 6 */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                                <iframe
                                    className="w-full h-48"
                                    src="https://www.youtube.com/embed/VIDEO_ID"
                                    title="Relaxation Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Stress Relief Techniques</h3>
                                    <p className="text-gray-600 mt-2">Simple techniques to help you relieve stress in minutes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Appointment;
