import React from "react";

const ReviewCart = ({reviews}) => {
   const {userName, user_photoURL, review} = reviews
  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-xl shadow-md border border-gray-200 space-y-4">
        {/* Quote Icon */}
        <div className="text-4xl text-teal-600">❝</div>

        {/* Text */}
        <p className="text-gray-600 leading-relaxed">{review}</p>

        {/* Dotted Line */}
        <div className="border-t border-dotted border-gray-400 my-2"></div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-teal-600 rounded-full">
            <img src={user_photoURL} alt="" />
          </div>

          <div>
            <h3 className="font-bold text-teal-700">{userName}</h3>
            <p className="text-gray-500 text-sm">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
