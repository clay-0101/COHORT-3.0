import React, { useContext } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { MyStore } from '../../../Context/MyContext'

const Form = () => {
   let {recipeData, setRecipeData, } = useContext(MyStore)

    let { handleSubmit, register, formState: { errors }, reset } = useForm({ mode: "onChange" })

    function addRecipeData(data) {
        let newData = [...recipeData , {...data, id : nanoid()}]

        setRecipeData(newData)
        localStorage.setItem('AllRecipe', JSON.stringify(newData))

        reset()
    }

    return (
        <div className="w-full max-w-[358px] bg-white border border-orange-100 rounded-lg shadow-sm p-5">
            <h1 className="text-xl font-bold text-gray-900">Add New Recipe</h1>
            <p className="text-xs text-gray-500 mt-1 mb-5">
                Share your delicious recipe with everyone.
            </p>

            <form
                onSubmit={handleSubmit(addRecipeData)}
                className="space-y-4">

                {/* Recipe Name */}
                <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Recipe Name
                    </label>
                    <input
                        {...register("name", {
                            required: "Fill This Field",
                            minLength: {
                                value: 2,
                                message: "Minimum 3 Letter Required"
                            },
                            maxLength: {
                                value: 20,
                                message: "Maximum 20 Letters only"
                            }
                        })}
                        type="text"
                        placeholder="Recipe Name"
                        className="w-full rounded-md border border-gray-300 px-2.5 py-2 text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                    {errors.name && <p className='text-[12px] text-red-500'>{errors.name.message}</p>}
                </div>

                {/* Chef Name */}
                <div>

                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Chef Name
                    </label>
                    <input
                        {...register("chefName", {
                            required: "Fill This Field",
                            minLength: {
                                value: 2,
                                message: "Minimum 3 Letter Required"
                            },
                            maxLength: {
                                value: 20,
                                message: "Maximum 20 Letters only"
                            }

                        })}
                        type="text"
                        placeholder="Chef Name"
                        className="w-full rounded-md border border-gray-300 px-2.5 py-2 text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                    {errors.chefName && <p className='text-[12px] text-red-500'>{errors.chefName.message}</p>}

                </div>

                {/* Price + Prep Time */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                            Price
                        </label>
                        <input
                            {...register("price", {
                                required:'Fill !!'
                            })}
                            type="number"
                            placeholder="Price"
                            className="w-full rounded-md border border-gray-300 px-2.5 py-2 text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                          {errors.price && <p className='text-[12px] text-red-500'>{errors.price.message}</p>}
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-800 mb-1">
                            Prep Time
                        </label>
                        <input
                            {...register("prepTime", {
                               required:'Fill !!'
                            })}
                            type="number"
                            placeholder="30 mins"
                            className="w-full rounded-md border border-gray-300 px-2.5 py-2 text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                         {errors.prepTime && <p className='text-[12px] text-red-500'>{errors.prepTime.message}</p>}
                    </div>
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Image URL
                    </label>
                    <input
                        {...register("imageUrl", {
                            required: true,
                            pattern: {
                                value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/,
                                message: "Paste a Valid URL"
                            }
                        })}
                        type="text"
                        placeholder="Paste Image URL"
                        className="w-full rounded-md border border-gray-300 px-2.5 py-2 text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                    {errors.imageUrl && <p className='text-[12px] text-red-500'>{errors.imageUrl.message}</p>}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Description
                    </label>
                    <textarea
                        {...register("description", {
                            required: "Fill This Field",
                            maxLength: {
                                value: 60,
                                message: 'maximum 60 letter only!'
                            }
                        })}
                        placeholder="Description..."
                        rows={3}
                        className="w-full rounded-md border border-gray-300 px-2.5 py-2 text-xs placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    />
                    {errors.description && <p  className='text-[12px] text-red-500'>{errors.description.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-md transition-colors"
                >
                    Create Recipe
                </button>
            </form>
        </div>
    )
}

export default Form