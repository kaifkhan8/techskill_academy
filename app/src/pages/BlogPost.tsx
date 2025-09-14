import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tags } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const relatedPosts = blogPosts.filter(p => 
    p.id !== post.id && 
    (p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
  ).slice(0, 3);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-primary mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              {post.titleHindi}
            </p>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl mb-8">
              <p className="text-lg text-muted-foreground italic m-0">
                {post.excerpt}
              </p>
            </div>
            
            <ReactMarkdown 
              className="text-foreground"
              components={{
                h1: ({children}) => <h1 className="text-3xl font-bold text-primary mt-8 mb-4">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-bold text-primary mt-6 mb-3">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-semibold text-primary mt-4 mb-2">{children}</h3>,
                p: ({children}) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
                ul: ({children}) => <ul className="list-disc pl-6 mb-4 text-muted-foreground">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal pl-6 mb-4 text-muted-foreground">{children}</ol>,
                li: ({children}) => <li className="mb-2">{children}</li>,
                strong: ({children}) => <strong className="text-foreground font-semibold">{children}</strong>,
                blockquote: ({children}) => (
                  <blockquote className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg mb-4 italic">
                    {children}
                  </blockquote>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Tags className="w-5 h-5 text-primary" />
              <span className="font-semibold">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                  <p className="text-muted-foreground mb-2">{post.authorRole}</p>
                  <p className="text-sm text-muted-foreground">
                    Experienced technical professional with expertise in industrial training and education. 
                    Passionate about helping students and working professionals advance their technical careers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="course-card">
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover"
                      />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-2 left-2 text-xs"
                      >
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary transition-colors">
                        <Link to={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{relatedPost.readTime}</span>
                        <Button variant="ghost" size="sm" className="h-auto p-0 text-xs" asChild>
                          <Link to={`/blog/${relatedPost.id}`}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;