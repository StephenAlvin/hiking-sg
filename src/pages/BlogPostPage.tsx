import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/data/blogs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ReactMarkdown from 'react-markdown';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState(blogPosts.find(post => post.slug === slug));
  
  useEffect(() => {
    // Find the post based on slug
    const currentPost = blogPosts.find(post => post.slug === slug);
    setPost(currentPost);
    
    // Set page title
    if (currentPost) {
      document.title = `${currentPost.title} | SingTrails Blog`;
    } else {
      document.title = 'Blog Post Not Found | SingTrails';
    }
  }, [slug]);
  
  // If post is not found, show 404 message
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
  
  // Get similar posts (same category or tags, excluding current post)
  const similarPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);
  
  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-96 w-full relative">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-8 left-4 sm:left-6 lg:left-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          </div>
          
          <div className="max-w-3xl mx-auto -mt-32 relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <span className="bg-emerald-700 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm mb-6">
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-emerald dark:prose-invert lg:prose-lg max-w-none mb-12">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {/* Tags */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link 
                  key={tag}
                  to={`/blog?tag=${tag}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Author */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-10 flex items-start sm:items-center flex-col sm:flex-row">
            <Avatar className="h-16 w-16 mr-4 mb-4 sm:mb-0">
              <AvatarImage src={`https://ui-avatars.com/api/?name=${post.author.replace(/\s+/g, '+')}&background=0D9488&color=fff`} />
              <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">About {post.author}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {post.author} is an experienced hiking guide and nature enthusiast with extensive knowledge of Singapore's trails and wildlife.
              </p>
              <div className="flex space-x-2">
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-emerald-700 dark:hover:text-emerald-500"
                  aria-label="Twitter profile"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-emerald-700 dark:hover:text-emerald-500"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Social Share */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Share This Article</h3>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                className="inline-flex items-center"
                asChild
              >
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="inline-flex items-center"
                asChild
              >
                <a 
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="inline-flex items-center"
                asChild
              >
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          {/* Similar Posts */}
          {similarPosts.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">You May Also Like</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {similarPosts.map(similarPost => (
                  <Link key={similarPost.id} to={`/blog/${similarPost.slug}`} className="block group">
                    <div className="h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-md flex flex-col">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={similarPost.imageUrl} 
                          alt={similarPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 flex-grow flex flex-col">
                        <span className="text-xs text-emerald-700 dark:text-emerald-500 font-medium uppercase mb-1">
                          {similarPost.category}
                        </span>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">
                          {similarPost.title}
                        </h4>
                        <div className="mt-auto pt-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(similarPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Navigation */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
            <div className="flex justify-between">
              <Button asChild variant="outline">
                <Link to="/blog" className="flex items-center gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <Button asChild className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                <Link to="/booking" className="flex items-center gap-1">
                  Book a Hike
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;