
import React from 'react';
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

const PopularWatchesCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold mb-6 text-center">Popular Models</h3>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {popularWatches.map((watch, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Link to={`/dashboard?brand=${watch.brand}&model=${watch.model}`}>
                  <Card className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <AspectRatio ratio={1 / 1} className="mb-3 bg-gray-100 rounded-md overflow-hidden">
                        <img
                          src={watch.imageUrl}
                          alt={`${watch.brand} ${watch.model}`}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <div>
                        <h4 className="font-medium">{watch.brand}</h4>
                        <p className="text-sm text-gray-700">{watch.model}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <p className="text-sm text-gray-500">{watch.reference}</p>
                          <p className="font-semibold">{watch.price}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1" />
        <CarouselNext className="right-1" />
      </Carousel>
    </div>
  );
};

export default PopularWatchesCarousel;
