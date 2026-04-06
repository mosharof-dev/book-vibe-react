import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const book = books.find(b => b.bookId == parseInt(bookId));

    if (!book) return <div className="text-center py-20 text-2xl font-bold">Book not found!</div>;

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        /* Container-center */
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 my-10">
    <div className="flex flex-col lg:flex-row gap-12 bg-gray-100 p-10 rounded-xl">
        
        {/* Left Side: Image Container  */}
        <div className="flex-1  bg-[#cce6ff] rounded-2xl p-8 md:p-12 lg:p-16 flex justify-center items-center">
            <img 
                src={image} 
                alt={bookName} 
                className="w-full max-h-150 object-contain drop-shadow-3xl hover:scale-105 transition-transform duration-300 " 
            />
        </div>

        {/* Right Side: Content Container */}
        <div className="flex-1 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{bookName}</h1>
            <p className="text-xl font-medium text-gray-700 mb-4">By : {author}</p>
            
            <div className="border-y border-gray-200 py-3 mb-4">
                <p className="text-xl font-medium text-gray-700">{category}</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
                <span className="font-bold text-black">Review : </span> {review}
            </p>

            <div className="flex items-center gap-4 mb-6">
                <span className="font-bold">Tag</span>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-4 py-1 bg-green-50 text-[#23BE0A] rounded-full font-medium text-sm">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            <hr className="border-gray-200 mb-6" />

            {/* Info Table - Aligning properly */}
            <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 w-full md:w-2/3">
                    <p className="text-gray-500">Number of Pages:</p>
                    <p className="font-bold text-black">{totalPages}</p>
                </div>
                <div className="grid grid-cols-2 w-full md:w-2/3">
                    <p className="text-gray-500">Publisher:</p>
                    <p className="font-bold text-black">{publisher}</p>
                </div>
                <div className="grid grid-cols-2 w-full md:w-2/3">
                    <p className="text-gray-500">Year of Publishing:</p>
                    <p className="font-bold text-black">{yearOfPublishing}</p>
                </div>
                <div className="grid grid-cols-2 w-full md:w-2/3">
                    <p className="text-gray-500">Rating:</p>
                    <p className="font-bold text-black">{rating}</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
                <button className="px-8 py-3 border border-gray-300 rounded-lg font-bold hover:bg-black hover:text-white transition duration-300">
                    Read
                </button>
                <button className="px-8 py-3 bg-[#50B1C9] text-white rounded-lg font-bold hover:bg-[#3e93a7] transition duration-300">
                    Wishlist
                </button>
            </div>
        </div>
    </div>
</div>
    );
};

export default BookDetails;