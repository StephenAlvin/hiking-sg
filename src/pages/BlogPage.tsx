import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search, Tag, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogs';

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Blog | SingTrails - Singapore Hiking Guide';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  // Filter blog posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hiking Blog</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover tips, guides, and stories about Singapore's hiking trails and outdoor adventures.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-10">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-emerald-500 focus:border-emerald-500" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                className={selectedTag === null ? "bg-emerald-700 hover:bg-emerald-800" : ""}
                onClick={() => setSelectedTag(null)}
              >
                All Topics
              </Button>
              
              {allTags.map(tag => (
                <Button 
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  className={selectedTag === tag ? "bg-emerald-700 hover:bg-emerald-800" : ""}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <Link to={`/blog/${filteredPosts[0].slug}`} className="block">
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:shadow-xl">
                  <div className="relative h-96">
                    <img 
                      src={filteredPosts[0].imageUrl} 
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center mb-2">
                        <span className="bg-emerald-700 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                          {filteredPosts[0].category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{filteredPosts[0].title}</h2>
                      <p className="text-white/90 mb-4 line-clamp-2">{filteredPosts[0].excerpt}</p>
                      <div className="flex items-center text-white/80 text-sm">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(filteredPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>5 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
          
          {/* Blog Posts Grid */}
          {filteredPosts.length > 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.slice(1).map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-md h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-emerald-700 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex-grow">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 3).map(tag => (
                            <div 
                              key={tag} 
                              className="inline-flex items-center text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedTag(tag);
                              }}
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Search className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No results found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We couldn't find any blog posts matching your criteria. Try adjusting your search terms.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;