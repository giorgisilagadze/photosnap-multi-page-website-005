import React from 'react'
import Image from '../components/Image'

const content = [
  {
    bg: "./assets/stories/mobile/mountains.jpg",
    date: "April 16th 2020",
    title: "The Mountains",
    creator: "by John Appleseed"
  },
  {
    bg: "./assets/stories/mobile/cityscapes.jpg",
    date: "April 14th 2020",
    title: "Sunset Cityscapes",
    creator: "by Benjamin Cruz"
  },
  {
    bg: "./assets/stories/mobile/18-days-voyage.jpg",
    date: "April 11th 2020",
    title: "18 Days Voyage",
    creator: "by Alexei Borodin"
  },
  {
    bg: "./assets/stories/mobile/architecturals.jpg",
    date: "April 9th 2020",
    title: "Architecturals",
    creator: "by Samantha Brooke"
  },
  {
    bg: "./assets/stories/mobile/world-tour.jpg",
    date: "April 7th 2020",
    title: "World Tour 2019",
    creator: "by Timothy Wagner"
  },
  {
    bg: "./assets/stories/mobile/unforeseen-corners.jpg",
    date: "April 3rd 2020",
    title: "Unforeseen Corners",
    creator: "by William Malcolm"
  },
  {
    bg: "./assets/stories/mobile/king-on-africa.jpg",
    date: "March 29th 2020",
    title: "King on Africa: Part II",
    creator: "by Tim Hillenburg"
  },
  {
    bg: "./assets/stories/mobile/trip-to-nowhere.jpg",
    date: "March 21st 2020",
    title: "The Trip to Nowhere",
    creator: "by Felicia Rourke"
  },
  {
    bg: "./assets/stories/mobile/rage-of-the-sea.jpg",
    date: "March 19th 2020",
    title: "Rage of The Sea",
    creator: "by Mohammed Abdul"
  },
  {
    bg: "./assets/stories/mobile/running-free.jpg",
    date: "March 16th 2020",
    title: "Running Free",
    creator: "by Michelle"
  },
  {
    bg: "./assets/stories/mobile/behind-the-waves.jpg",
    date: "March 11th 2020",
    title: "Behind the Waves",
    creator: "by Lamarr Wilson"
  },
  {
    bg: "./assets/stories/mobile/calm-waters.jpg",
    date: "March 9th 2020",
    title: "Calm Waters",
    creator: "by Samantha Brooke"
  },
  {
    bg: "./assets/stories/mobile/milky-way.jpg",
    date: "March 5th 2020",
    title: "The Milky Way",
    creator: "by Benjamin Cruz"
  },
  {
    bg: "./assets/stories/mobile/dark-forest.jpg",
    date: "March 4th 2020",
    title: "Night at The Dark Forest",
    creator: "by  Mohammed Abdul"
  },
  {
    bg: "./assets/stories/mobile/somwarpet.jpg",
    date: "March 1st 2020",
    title: "Somwarpet’s Beauty",
    creator: "by Michelle"
  },
  {
    bg: "./assets/stories/mobile/land-of-dreams.jpg",
    date: "February 25th 2020",
    title: "Land of Dreams",
    creator: "by William Malcolm"
  },
]

export default function Stories() {
  return (
    <div>
      {content.map((item) => (
        <Image bg={item.bg} dateTxt={item.date} title={item.title} creator={item.creator} key={Math.random()}/>
      ))}
    </div>
  )
}
