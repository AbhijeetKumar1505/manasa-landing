export default function ProblemStatement() {
  const stats = [
    { value: '48-60%', label: 'Students with depression symptoms' },
    { value: '50-87%', label: 'Students experiencing anxiety' },
    { value: '13,000+', label: 'Student suicides in 2021' },
    { value: '26.5%', label: 'Students with clinically significant depression' },
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">The Student Mental Health Crisis in India</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">A Growing Epidemic</h3>
            <p className="text-gray-700 mb-6">
              Indian students face unprecedented mental health challenges, with depression affecting 48.3% to 59.8% and anxiety impacting 50% to 86.5% of the student population.
            </p>
            <p className="text-gray-700 mb-6">
              The situation is dire, with over 13,000 students in India dying by suicide in 2021 alone - an average of more than 35 per day.
            </p>
            <p className="text-gray-700">
              This crisis is fueled by academic pressure, financial stress, social isolation, and inadequate support systems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">Key Challenges</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Academic Pressure</h4>
              <p className="text-gray-600">Intense competition, high-stakes exams, and parental expectations create overwhelming stress.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Social Isolation</h4>
              <p className="text-gray-600">Digital overload and lack of meaningful connections contribute to loneliness.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Inadequate Support</h4>
              <p className="text-gray-600">Limited access to quality, affordable mental health resources and counseling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
