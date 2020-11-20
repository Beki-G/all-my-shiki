import React from 'react'

const CharacterProfileName = ({ character, setCharacterName, isEdit }) => {
    return (
        <div>
            {!isEdit ? (
        <p className="text-3xl font-semibold">{character.name}</p>
      ) : (
        <input
          className="text-3xl font-semibold focus:border-blue-500"
          placeholder={character.name}
          onChange={(e) => {
            setCharacterName({ name: e.target.value });
          }}
        />
      )}

      <p className=" text-gray-700 mb-2">
        Shikigami: {character.character.name}
      </p>
        </div>
    )
}

export default CharacterProfileName
