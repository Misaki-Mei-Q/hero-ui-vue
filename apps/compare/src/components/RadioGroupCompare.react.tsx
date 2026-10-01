import { Description, Label, Radio, RadioGroup } from '@heroui/react'

export function RadioGroupCompare() {
  return (
    <div>
      <section className="compare-section">
        <h3 className="compare-section__title">Basic (vertical)</h3>
        <RadioGroup defaultValue="premium" name="plan" className="w-full max-w-64">
          <Label>Plan selection</Label>
          <Description>Choose the plan that suits you best</Description>
          <Radio value="basic">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Basic Plan
            </Radio.Content>
            <Description>Includes 100 messages per month</Description>
          </Radio>
          <Radio value="premium">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Premium Plan
            </Radio.Content>
            <Description>Includes 200 messages per month</Description>
          </Radio>
          <Radio value="enterprise">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Enterprise
            </Radio.Content>
            <Description>Unlimited messages &amp; priority support</Description>
          </Radio>
        </RadioGroup>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Horizontal</h3>
        <RadioGroup defaultValue="pro" orientation="horizontal" name="plan-h">
          <Radio value="starter">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Starter
            </Radio.Content>
          </Radio>
          <Radio value="pro">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Pro
            </Radio.Content>
          </Radio>
          <Radio value="business">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Business
            </Radio.Content>
          </Radio>
        </RadioGroup>
      </section>

      <section className="compare-section">
        <h3 className="compare-section__title">Disabled</h3>
        <RadioGroup isDisabled defaultValue="b" name="plan-d" className="w-full max-w-64">
          <Label>Plan (locked)</Label>
          <Radio value="b">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Basic
            </Radio.Content>
          </Radio>
          <Radio value="p">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              Premium
            </Radio.Content>
          </Radio>
        </RadioGroup>
      </section>
    </div>
  )
}