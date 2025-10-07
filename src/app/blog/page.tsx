import Link from 'next/link';
import { FaClock, FaUser, FaArrowRight } from 'react-icons/fa';
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Academic Stress: A Guide for Indian Students',
      excerpt: 'Academic pressure is one of the leading causes of stress among Indian students. Learn about the signs, impacts, and effective coping strategies.',
      author: 'Dr. Priya Sharma',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Mental Health',
      image: null,
      slug: 'understanding-academic-stress'
    },
    {
      id: 2,
      title: 'The Science of Neuroplasticity and Student Well-being',
      excerpt: 'Discover how neuroplasticity can help reshape your mental patterns and improve your emotional resilience through evidence-based practices.',
      author: 'Dr. Vikram Singh',
      date: 'January 12, 2025',
      readTime: '10 min read',
      category: 'Research',
      image: null,
      slug: 'neuroplasticity-student-wellbeing'
    },
    {
      id: 3,
      title: '5 Mindfulness Techniques Every Student Should Know',
      excerpt: 'Simple yet powerful mindfulness practices that can help you stay focused, reduce anxiety, and improve your overall mental health.',
      author: 'Ananya Reddy',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Wellness',
      image: null,
      slug: 'mindfulness-techniques-students'
    },
    {
      id: 4,
      title: 'Breaking the Stigma: Mental Health in Indian Education',
      excerpt: 'An in-depth look at mental health stigma in Indian educational institutions and how we can create more supportive environments.',
      author: 'Dr. Priya Sharma',
      date: 'January 8, 2025',
      readTime: '12 min read',
      category: 'Awareness',
      image: null,
      slug: 'breaking-mental-health-stigma'
    },
    {
      id: 5,
      title: 'Digital Wellness: Balancing Screen Time and Mental Health',
      excerpt: 'Learn how excessive screen time affects mental health and discover practical tips for developing healthier digital habits.',
      author: 'Rajesh Kumar',
      date: 'January 5, 2025',
      readTime: '7 min read',
      category: 'Wellness',
      image: null,
      slug: 'digital-wellness-screen-time'
    },
    {
      id: 6,
      title: 'Exam Anxiety: Causes, Symptoms, and Solutions',
      excerpt: 'Comprehensive guide to understanding and managing exam-related anxiety with proven techniques and professional insights.',
      author: 'Dr. Vikram Singh',
      date: 'January 3, 2025',
      readTime: '9 min read',
      category: 'Mental Health',
      image: null,
      slug: 'exam-anxiety-guide'
    },
    {
      id: 7,
      title: 'The Role of Sleep in Student Performance and Well-being',
      excerpt: 'Why quality sleep is crucial for academic success and mental health, plus practical tips for better sleep hygiene.',
      author: 'Ananya Reddy',
      date: 'December 28, 2024',
      readTime: '8 min read',
      category: 'Wellness',
      image: null,
      slug: 'sleep-student-performance'
    },
    {
      id: 8,
      title: 'Building Resilience: Skills Every Student Needs',
      excerpt: 'Discover the key components of resilience and how to develop mental strength to overcome challenges and setbacks.',
      author: 'Dr. Priya Sharma',
      date: 'December 25, 2024',
      readTime: '10 min read',
      category: 'Personal Growth',
      image: null,
      slug: 'building-resilience-students'
    },
    {
      id: 9,
      title: 'How to Support a Friend Struggling with Mental Health',
      excerpt: 'A compassionate guide on recognizing signs of mental health struggles and providing meaningful support to peers.',
      author: 'Rajesh Kumar',
      date: 'December 22, 2024',
      readTime: '6 min read',
      category: 'Awareness',
      image: null,
      slug: 'supporting-friend-mental-health'
    }
  ];

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            MANASA Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and resources on mental health, well-being, and student life
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-8">Featured Article</h2>
          <Card className="max-w-5xl mx-auto overflow-hidden" hover>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 md:h-auto flex items-center justify-center text-white text-6xl font-bold">
                📖
              </div>
              <div className="p-6 flex flex-col justify-center">
                <Badge variant="info" className="w-fit mb-4">
                  {blogPosts[0].category}
                </Badge>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6 gap-4">
                  <span className="flex items-center gap-2">
                    <FaUser /> {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock /> {blogPosts[0].readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} hover>
                <CardHeader>
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48 rounded-lg flex items-center justify-center text-white text-5xl mb-4">
                    📝
                  </div>
                  <Badge variant="info" className="mb-3">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl line-clamp-2 mb-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 gap-3 mb-4">
                    <span className="flex items-center gap-1">
                      <FaUser /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest articles on mental health, wellness tips, and student resources.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
