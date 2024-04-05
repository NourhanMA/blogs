export default function Home() {
  const blog = {
    title:
      "Unveiling the Art of Self-Discovery: A Journey into Personal Growth and Fulfillment",
    category: "Technology",
    image:
      "https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
            Title: 'Unveiling the Art of Self-Discovery: A Journey into Personal Growth and Fulfillment'
        
            Introduction:
            'In the hustle and bustle of modern life, amidst the noise of external expectations and societal pressures, many of us find ourselves caught in the relentless pursuit of success, often at the expense of our own well-being and authenticity. In the midst of this chaos, the journey of self-discovery emerges as a beacon of hope, guiding us towards a deeper understanding of ourselves and our place in the world. It is a journey that transcends mere self-improvement; rather, it is a profound exploration of our innermost truths and desires, leading us towards greater fulfillment and purpose. Join me as we embark on this transformative odyssey into the art of self-discovery.'
            
            Chapter 1: The Call of Self-Exploration
            'At some point in our lives, we all hear the faint whisper of our inner voice beckoning us to embark on a journey of self-exploration. It may come in the form of a fleeting moment of introspection or a sudden realization that there is more to life than meets the eye. Whatever its guise, this call to self-discovery is a universal phenomenon, urging us to delve beneath the surface of our existence and uncover the depths of our being.'
            
            Chapter 2: Embracing Vulnerability
            'Central to the journey of self-discovery is the willingness to embrace vulnerability. It is through vulnerability that we are able to peel back the layers of self-protection and reveal our authentic selves to the world. In a society that often equates vulnerability with weakness, this can be a daunting task. However, it is only by embracing our vulnerability that we can truly connect with others and experience the richness of human relationships.'
            
            Chapter 3: Cultivating Self-Compassion
            'As we navigate the twists and turns of our journey, it is essential to cultivate self-compassion along the way. Self-compassion involves treating ourselves with kindness and understanding, particularly in times of difficulty or self-doubt. Rather than succumbing to self-criticism and judgment, we learn to offer ourselves the same warmth and empathy that we would extend to a dear friend. In doing so, we create a nurturing inner environment that fosters growth and resilience.'
            
            Chapter 4: Unearthing Our Passions
            'At the heart of self-discovery lies the quest to unearth our passions and pursue that which sets our souls on fire. Whether it be through creative expression, meaningful work, or personal interests, discovering our passions infuses life with purpose and vitality. Yet, this journey is not always straightforward, requiring us to sift through the noise of external expectations and societal norms to uncover the whispers of our own desires.'
            
            Chapter 5: Embracing Change and Uncertainty
            'In our journey of self-discovery, we inevitably encounter moments of change and uncertainty. It is during these times of transition that we are called to embrace the unknown and trust in the wisdom of our inner guidance. While change can be unsettling, it also offers the opportunity for growth and transformation. By relinquishing our attachment to the familiar and stepping into the realm of possibility, we open ourselves up to new experiences and opportunities for self-discovery.'
            
            Chapter 6: The Power of Mindfulness and Reflection
            'In the fast-paced world we inhabit, the practice of mindfulness and reflection serves as a anchor amidst the chaos. By cultivating present-moment awareness and taking time for introspection, we create space for self-discovery to unfold. Whether through meditation, journaling, or simply pausing to appreciate the beauty of the world around us, mindfulness allows us to connect with our innermost selves and gain clarity on our values and priorities.'
            
            Chapter 7: Nurturing Authentic Connections
            'As we journey deeper into self-discovery, we come to recognize the importance of authentic connections with others. These connections serve as mirrors, reflecting back to us aspects of ourselves that we may not have fully acknowledged or embraced. By fostering genuine relationships built on trust, empathy, and mutual respect, we create a supportive community that encourages us to embrace our authenticity and live in alignment with our true selves.'
            
            Conclusion:
            'The journey of self-discovery is a lifelong odyssey filled with twists and turns, challenges and triumphs. It is a journey of courage and resilience, of vulnerability and growth. Yet, amidst the uncertainty and complexity of life, it is also a journey of profound beauty and meaning. As we peel back the layers of conditioning and societal expectations, we uncover the radiant essence of our true selves, shining brightly amidst the darkness. And in doing so, we discover a sense of fulfillment and purpose that transcends all else. So let us embrace the call of self-discovery, for in its depths lies the key to unlocking the fullness of our human potential.'
          `,
    createdAt: "2022-01-01",
    updatedAt: "2022-01-10",
  };

  return (
    <div className="mt-4 mb-4 max-w-6xl mx-auto px-8 py-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="mr-5 ml-5 mb-5 md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="md:w-64 h-auto object-cover object-center rounded-lg"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 md:flex md:flex-col md:justify-center md:gap-6">
          <h1 className="text-gray-500 text-3xl font-semibold mb-2">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-xl font-bold mb-4">
            {blog.category}
          </p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <p className="text-gray-500 leading-relaxed mb-4">{blog.content}</p>
        <div className="flex justify-between text-sm">
          <p className="text-gray-600">Created: {blog.createdAt}</p>
          <p className="text-gray-600">Last Updated: {blog.updatedAt}</p>
        </div>
      </div>
    </div>
  );
}
