
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { popularWatches } from '@/data/popularWatches';
import { getWatchImages } from '@/services/watch/watchImageService';
import { useToast } from "@/components/ui/use-toast";
import { Watch } from '@/types/watch';

const PopularWatchesCarousel = () => {
  const [watches, setWatches] = useState(popularWatches);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchWatchData = async () => {
      try {
        // Create a copy of watches with updated image URLs
        const updatedWatches = [...popularWatches];
        
        // Fetch images for each watch from the test mode data
        for (let i = 0; i < updatedWatches.length; i++) {
          const watch = updatedWatches[i];
          // Try to get matching test data based on brand and model
          const imageUrl = await getWatchImages(watch.brand, watch.model);
          if (imageUrl) {
            updatedWatches[i] = { ...watch, imageUrl };
          }
        }
        
        setWatches(updatedWatches);
      } catch (error) {
        console.error("Failed to fetch watch data:", error);
        toast({
          title: "Error",
          description: "Failed to load watch data",
          variant: "destructive",
        });
      }
    };
    
    fetchWatchData();
  }, [toast]);
  
  return (
    <div className="relative w-full py-12">
      {/* Dark, luxury background */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury watch background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6 text-center text-white">Popular Models</h3>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {watches.map((watch, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Link to={`/dashboard?activeSection=market&brand=${encodeURIComponent(watch.brand)}&model=${encodeURIComponent(watch.model)}`}>
                    <Card className="overflow-hidden border border-gray-800 bg-black/70 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,122,255,0.3)] transition-shadow duration-300 cursor-pointer group">
                      <CardContent className="p-4">
                        <AspectRatio ratio={1 / 1} className="mb-3 bg-gray-900 rounded-md overflow-hidden">
                          <img
                            src={watch.imageUrl}
                            alt={`${watch.brand} ${watch.model}`}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                        </AspectRatio>
                        <div>
                          <h4 className="font-medium text-white">{watch.brand}</h4>
                          <p className="text-sm text-gray-300">{watch.model}</p>
                          <div className="mt-2 flex justify-between items-center">
                            <p className="text-sm text-gray-400">{watch.reference}</p>
                            <p className="font-semibold text-watch-blue">{watch.price}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 text-white border-gray-700 bg-black/50 hover:bg-black/70" />
          <CarouselNext className="right-1 text-white border-gray-700 bg-black/50 hover:bg-black/70" />
        </Carousel>
      </div>
    </div>
  );
};

export default PopularWatchesCarousel;
