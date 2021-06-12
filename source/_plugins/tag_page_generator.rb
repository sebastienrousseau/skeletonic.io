# file: _plugins/tag_page_generator.rb

require 'logger'

module Jekyll
    class TagPageGenerator < Generator
      safe true
  
      def generate(site)
        # @logger = Logger.new(STDOUT)    
        tags = site.documents.flat_map { |post| post.data['tags'] || [] }.to_set
        # @logger.debug(tags)
        tags.each do |tag|
          site.pages << TagPage.new(site, site.source, tag)
        end
      end
    end
    class TagPage < Page
      def initialize(site, base, tag)
        # @logger = Logger.new(STDOUT)    
        @site = site
        @base = base
        substitutedTag=tag
        substitutedTag=substitutedTag.gsub(" ", "-")
        @dir  = File.join('tag', substitutedTag)
        @name = 'index.html'
  
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'tag_pages.html')
        self.data['tag'] = tag
        self.data['title'] = "Tag: #{tag}"
        # @logger.debug(tag)
      end
    end
end