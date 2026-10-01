import { Description, SearchField } from '@heroui/react'

export function SearchFieldCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Basic</h3>
        <SearchField className="w-full max-w-[280px]" name="search">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">With label & description</h3>
        <SearchField className="w-full max-w-[280px]" name="search-products" variant="secondary">
          <SearchField.Label>Search products</SearchField.Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search products..." />
            <SearchField.ClearButton />
          </SearchField.Group>
          <Description>Enter keywords to search for products</Description>
        </SearchField>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled</h3>
        <SearchField className="w-full max-w-[280px]" name="search-disabled" isDisabled>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Disabled search" />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </section>
    </div>
  )
}