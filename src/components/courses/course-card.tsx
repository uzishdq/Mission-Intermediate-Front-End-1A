import { memo } from "react";
import type { Course } from "../../data/constant";

interface ICourseCard {
  course: Course;
}

function CourseCard({ course }: Readonly<ICourseCard>) {
  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-xl overflow-hidden shadow transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 will-change-transform">
      <img
        src={course.img}
        alt={course.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="px-3 py-2 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          {course.desc}
        </p>

        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://placehold.co/40x40?text=JO"
            alt={course.instructor}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-gray-900 m-0">
              {course.instructor}
            </h4>
            <p className="text-xs text-gray-400 m-0">{course.job}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-yellow-500 text-sm">
            <span>★★★★☆</span>
            <span className="text-gray-500">
              {course.rating} ({course.reviews})
            </span>
          </div>
          <div className="text-green-500 font-bold text-lg">
            Rp {course.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo<ICourseCard>(CourseCard);
