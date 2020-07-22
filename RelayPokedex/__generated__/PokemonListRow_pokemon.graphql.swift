// Auto-generated by relay-compiler. Do not edit.

import Relay

public struct PokemonListRow_pokemon {
    public var fragmentPointer: FragmentPointer

    public init(key: PokemonListRow_pokemon_Key) {
        fragmentPointer = key.fragment_PokemonListRow_pokemon
    }

    public static var node: ReaderFragment {
        ReaderFragment(
            name: "PokemonListRow_pokemon",
            type: "Pokemon",
            selections: [
                .field(ReaderScalarField(
                    name: "name"
                )),
                .field(ReaderScalarField(
                    name: "number"
                ))
            ]
        )
    }
}

extension PokemonListRow_pokemon {
    public struct Data: Decodable {
        public var name: String?
        public var number: String?
    }
}

public protocol PokemonListRow_pokemon_Key {
    var fragment_PokemonListRow_pokemon: FragmentPointer { get }
}

extension PokemonListRow_pokemon: Relay.Fragment {}

#if swift(>=5.3) && canImport(RelaySwiftUI)
import RelaySwiftUI

extension PokemonListRow_pokemon_Key {
    @available(iOS 14.0, macOS 10.16, tvOS 14.0, watchOS 7.0, *)
    public func asFragment() -> RelaySwiftUI.FragmentNext<PokemonListRow_pokemon> {
        RelaySwiftUI.FragmentNext<PokemonListRow_pokemon>(self)
    }
}
#endif